import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MainListItems from "./app/components/js/Sidebar/listItems";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./app/common/css/global.scss";

import TabsNav from "./app/components/js/tabs/Tabs";
import Dashboard from "./app/components/js/dashboard/Dashboard";

import detailsRedux from "./app/components/js/duck";
import { connect } from "react-redux";
import SecurityDeskTable from "./app/components/js/users/SecurityDeskUser";
import Reports from "./app/components/js/Reports/Reports";

const { operations } = detailsRedux;
const { getUserSessionDetails, clearUserSessionDetails } = operations;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    width: "calc(100vw - 240px)",
    overflow: "auto"
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Typography component="a" color="inherit" href="https://material-ui.com/">
        Quest global
      </Typography>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export function Template(props) {
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    isAuthenticated && (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Visitor Management System
            </Typography>
            {/* <IconButton color="inherit">
              <PopoverPopupState />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <MainListItems  path={window.location.pathname}/>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route path="/" exact component={withRouter(TabsNav)} />
              <Route path="/home" exact component={withRouter(TabsNav)} />
              <Route path="/users" exact component={withRouter(SecurityDeskTable)} />
              <Route path="/reports" exact component={withRouter(Reports)} />
              <Route
                path="/dashboard"
                exact
                component={withRouter(Dashboard)}
              />
              {/* <Route
                path="/newdash"
                exact
                component={withRouter(DashboardNew)}
              /> */}
            </Switch>
          </main>
        </BrowserRouter>
        <Container
          maxWidth="lg"
          className={[classes.container, "footer"].join(" ")}
        >
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
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
export default connect(null, mapDispatchToProps)(Template);