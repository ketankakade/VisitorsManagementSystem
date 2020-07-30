import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";
import Login from "./app/components/js/Login/login";
import "./app/common/css/global.scss";
import Template from "./template";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Grid container justify="center">
            <Switch>
              <Route path="/login" exact component={withRouter(Login)} />
              <Route path="/" component={withRouter(Template)} />
            </Switch>
          </Grid>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
