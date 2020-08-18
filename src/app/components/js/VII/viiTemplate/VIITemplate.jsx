import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "../viiTemplate/VIITemplate.scss";
import UserCreation from "../visitorCreation/UserCreation";
import UserCreationSecondstep from "../visitorCreation/UserCreationSecondstep";
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
  }
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Grid item xs={12}>
        <Grid item xs={6}>
          <FormControl>
            <Button variant="contained">NEXT</Button>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <Button variant="contained">CANCEL</Button>
          </FormControl>
        </Grid>
      </Grid>
    </Typography>
  );
}
export default function VIITemplate() {
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
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route
                path="/userCreation"
                exact
                component={withRouter(UserCreation)}
              />
              <Route
                path="/userCreation"
                exact
                component={withRouter(UserCreationSecondstep)}
              />
              <Route
                path="/visitorPass"
                exact
                component={withRouter(VisitorBadge)}
              />
               <Route
                path="/thanks"
                exact
               component={withRouter(ThankYou)} />
            </Switch>
          </main>
        </BrowserRouter>
      <UserCreation />
      {/* <UserCreationSecondstep /> */}
      {/* <ThankYou /> */}
      {/* <Container
        // maxWidth="lg"
        className={[classes.container, "footer"].join(" ")}
      >
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container> */}
    </div>
  );
}
