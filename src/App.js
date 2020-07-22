import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router';
import VisitorRegistration from './app/components/js/Registration/VisitorRegistration';
import Login from './app/components/js/Login/login';
import  './app/common/css/global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Grid container justify='center'>
            <Switch>
              <Route path="/" exact component={withRouter(VisitorRegistration)} />
              <Route path="/home" exact component={withRouter(VisitorRegistration)} />
              <Route path="/index" exact component={withRouter(VisitorRegistration)} />
              <Route path="/login" exact component={withRouter(Login)} />
              
              
            </Switch>
          </Grid>
    </BrowserRouter>
    </div>
  );
}

export default App;
