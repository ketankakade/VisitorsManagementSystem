import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { lighten, makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MainListItems from "./app/components/js/Sidebar/listItems";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./app/common/css/global.scss";
import DashboardNew from "./app/components/js/dashboardnew/DashboardNew";
import TabsNav from "./app/components/js/tabs/Tabs";
import PopoverPopupState from "./app/components/js/Sidebar/userIcon";
import Dashboard from "./app/components/js/dashboard/Dashboard";
import TempCardUsers from "./app/components/js/dashboard/TempCardUsers";
import VisitorDetails from "./app/components/js/dashboard/VisitorsDetails";
import detailsRedux from "./app/components/js/duck";
import { connect } from "react-redux";
import Users from "./app/components/js/users/users";

const { operations } = detailsRedux;
const { getUserSessionDetails, clearUserSessionDetails } = operations;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "98%"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
      backgroundColor:'#0F72A1'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: lighten('#cecece', 0.85),
  },
  drawerContainer: {
    overflow: "auto",
    
  },
  content: {
    flexGrow: 1,
    paddingTop: "80px"
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: 0
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12
  }
}));

export function NewTemplate(props) {
  const history = useHistory();
  const [isAuthenticated, setAuthentication] = useState(false);
  useEffect(() => {
    props
      .getUserSessionDetails()
      .then(data => {
        if (data) {
          setAuthentication(true);
        } else {
          redirectToLogin();
        }
      })
      .catch(() => {
        redirectToLogin();
      });
  }, [props]);

  const redirectToLogin = () => {
    setAuthentication(false);
    props.getUserSessionDetails().then(() => {
      history.push("/login");
    });
  };
  const classes = useStyles();

  return (
    isAuthenticated && (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <img
              alt="Quest"
              className="dashboardlogo"
              src={process.env.PUBLIC_URL + "/images/logo.jpg"}
            />
            <Typography variant="h6" noWrap>
              VMS
            </Typography>
            <section className={classes.rightToolbar}>
              <PopoverPopupState />
            </section>
          </Toolbar>
        </AppBar>
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <Divider />
              <MainListItems path={window.location.pathname} />
              <Divider />
            </div>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route
                path="/home"
                exact
                component={withRouter(DashboardNew)}
              />
              <Route
                path="/newdash"
                exact
                component={withRouter(DashboardNew)}
              />
              <Route path="/allusers" exact component={withRouter(Users)} />
              <Route
                path="/dashboard"
                exact
                component={withRouter(DashboardNew)}
              />
               <Route
                path="/Visitors"
                exact
               component={withRouter(({ match }) => (
                <TempCardUsers title={'Visitors'} />
                ))} />
                  <Route
                path="/Employees"
                exact
               component={withRouter(({ match }) => (
                <TempCardUsers title={'Employees'} />
                ))} />
                  <Route
                path="/Users"
                exact
               component={withRouter(({ match }) => (
                <TempCardUsers  title={'Users'} />
                ))} /> 
                <Route
                path="/VisitorDetails/:visitorId"
                exact
               component={withRouter(({ match }) => (
                <VisitorDetails  visitorId={match.params.visitorId} />
                ))} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getUserSessionDetails: () => dispatch(getUserSessionDetails()),
    clearUserSessionDetails: () => dispatch(clearUserSessionDetails())
  };
};
export default connect(null, mapDispatchToProps)(NewTemplate);
