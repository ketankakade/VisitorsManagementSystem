import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../viiTemplate/VIITemplate.scss";
import UserCreation from "../visitorCreation/UserCreation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#F7F8FC',
  },
  toolbar:{
      backgroundColor:'#0F72A1'
  },
}));

export default function VIITemplate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Toolbar >
           <img
                  alt="Quest"
                  className="logo"
                  src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                />
        </Toolbar>
      </AppBar>
     <UserCreation />
    </div>
  );
}
