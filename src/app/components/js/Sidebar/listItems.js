import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
  
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 240,
    backgroundColor: theme.palette.background.blue
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  active:{
    backgroundColor: theme.palette.primary.main,
  },

}));

export default function MainListItems(props) {
  const classes = useStyles();
  const [openUser, setOpenUser] = useState(true);
   
  const handleUserClick = () => {
    setOpenUser(!openUser);
  };
  
  return (
    <List>
      <ListItem
        button
        key="Home"
        component={NavLink}
        to="/newdash"
        activeClassName={classes.active} exact
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button onClick={handleUserClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={openUser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to="/allusers"
            activeClassName={classes.active} exact
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Security Management" />
          </ListItem>
          <Divider />
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to="/unapprovedUsers"
            activeClassName={classes.active} exact
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItem>
          <Divider />
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to="/unapprovedUsers"
            activeClassName={classes.active} exact
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="VII Management" />
          </ListItem>
          <Divider />
        </List>
      </Collapse>
      <ListItem    button
        key="Reports"
        component={NavLink}
        to="/reports"
        activeClassName={classes.active} exact>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </List>
  );
}
