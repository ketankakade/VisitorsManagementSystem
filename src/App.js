import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";
// import Login from "./app/components/js/Login/login";
import "./app/common/css/global.scss";
import NewTemplate from "./NewTemplate";
import { Provider } from "react-redux";
import { store } from "./app/store";
import LoginLayout from "./app/components/js/Login/LoginLayout";
import LoginLayoutVII from "./app/components/js/VII/loginVII/LoginLayoutVII";
import VIITemplate from "./app/components/js/VII/viiTemplate/VIITemplate";
import VisitorBadge from "./app/components/js/VII/visitorsPass/VisitorBadge";
import UserCreation from "./app/components/js/VII/visitorCreation/UserCreation";
import ContactPersonDetails from "./app/components/js/VII/visitorCreation/ContactPersonDetails";
import CancelRegistrationModal from "./app/components/js/VII/visitorCreation/CancelRegistrationModal";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Grid container justify="center">
            <Switch>
              <Route
                path="/VIIlogin"
                exact
                component={withRouter(LoginLayoutVII)}
              />
              <Route
                path="/userCreation"
                component={withRouter(UserCreation)}
              />
              <Route
                path="/cancel"
                component={withRouter(CancelRegistrationModal)}
              />
              <Route
                path="/contactPersonDetails"
                exact
                component={withRouter(ContactPersonDetails)}
              />
              <Route
                path="/VisitorTemplate"
                exact
                component={withRouter(VIITemplate)}
              />
              <Route path="/visitorPass" component={withRouter(VisitorBadge)} />
              <Route path="/login" exact component={withRouter(LoginLayout)} />
              <Route path="/" component={withRouter(NewTemplate)} />
            </Switch>
          </Grid>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
