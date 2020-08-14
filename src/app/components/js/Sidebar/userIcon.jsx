import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import detailsRedux from "../duck";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const { operations } = detailsRedux;
const { getUserSessionDetails, clearUserSessionDetails } = operations;

function PopoverPopupState(props) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const Logout = () => {
    props.clearUserSessionDetails().then(() => {
      history.push("/login");
    });
  };
  useEffect(() => {
    props.getUserSessionDetails().then(data => {
      if (data) {
        setUserName(data.name);
      }
    });
  }, [props]);
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
           <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <AccountCircle />
            <div className={"username"}>{userName}</div>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Box div={2}>
              <Typography>
                <ListItem button key="Profile" component="a" href="profile">
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button key="Logout" component="a" onClick={Logout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getUserSessionDetails: () => dispatch(getUserSessionDetails()),
    clearUserSessionDetails: () => dispatch(clearUserSessionDetails())
  };
};
export default connect(null, mapDispatchToProps)(PopoverPopupState);
