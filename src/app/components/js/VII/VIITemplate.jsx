import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../VII/VIITemplate.scss";
import UserCreation from "../VII/UserCreation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#F7F8FC',
  },
  toolbar:{
      backgroundColor:'#0F72A1'
  },
}));

export default function MenuAppBar() {
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
