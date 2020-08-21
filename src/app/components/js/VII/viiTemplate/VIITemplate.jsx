import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import "../viiTemplate/VIITemplate.scss";
import UserCreation from "../visitorCreation/UserCreation";
import ContactPersonDetails from "../visitorCreation/ContactPersonDetails";
import CancelRegistrationModal from "../visitorCreation/CancelRegistrationModal";
import VisitorBadge from "../visitorsPass/VisitorBadge";
import ThankYou from "../visitorCreation/ThankYou";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F7F8FC"
  },
  toolbar: {
    backgroundColor: "#0F72A1"
  },
  container: {
    backgroundColor: "#CFE5F1",
    width: "100%"
  },
  content: {
    flexGrow: 1,
    paddingTop: "0px"
  }
}));

export default function VIITemplate(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar>
          <img
            alt="Quest"
            className="logo"
            src={process.env.PUBLIC_URL + "/images/logo.jpg"}
          />
        </Toolbar>
      </AppBar>
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ""}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path="/visitorTemplate"
              exact
              component={withRouter(UserCreation)}
            />
            <Route
              path="/contactPersonDetails"
              exact
              component={withRouter(ContactPersonDetails)}
            />
            <Route
              path="/visitorPass"
              exact
              component={withRouter(VisitorBadge)}
            />
            <Route path="/thanks" exact component={withRouter(ThankYou)} />
          </Switch>
        </main>
      </BrowserRouter>
      {/* <UserCreation /> */}
    </div>
  );
}
