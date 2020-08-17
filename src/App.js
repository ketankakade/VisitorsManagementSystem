import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";
import Login from "./app/components/js/Login/login";
import "./app/common/css/global.scss";
 import NewTemplate from './NewTemplate';
import { Provider } from "react-redux";
import { store } from "./app/store";
import LoginVII from "./app/components/js/VII/LoginVII";
import UserCreation from "./app/components/js/VII/UserCreation";
import VisitorBadge from "./app/components/js/VII/VisitorBadge";
import VIITemplate from "./app/components/js/VII/VIITemplate";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Grid container justify="center">
            <Switch>
              <Route path="/VIIlogin" exact component={withRouter(LoginVII)} />
              <Route path="/VisitorTemplate" exact component={withRouter(VIITemplate)} />
              <Route path="/userCreation" component={withRouter(UserCreation)} />
              <Route path="/visitorPass" component={withRouter(VisitorBadge)} />
              <Route path="/login" exact component={withRouter(Login)} />
              <Route path="/" component={withRouter(NewTemplate)} />
            </Switch>
          </Grid>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
