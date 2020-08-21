import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import "../visitorCreation/VisitorRegistration.scss";

function ContactPersonDetails(props) {
  const EMAIL_REGEX = /^([\w+-]+(?:\.[\w+-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!(props && props.location && props.location.state)) {
      history.push("/VIIlogin");
    } else {
      const user = props.location.state.user;
      if (!(user && user.email && user.email !== "")) {
        history.push("/VIIlogin");
      } else {
        setUser(user);
      }
    }
  }, [props, setUser]);

let onSubmit = e => {
    if (validateForm()) {
      e.preventDefault();
      console.log(user);
      history.push({
        pathname: "/visitorPass",
        state: {
          user: user
        }
      });
    }
  };

  const useStyles = makeStyles({
    card: {
      padding: "30px"
    },
    container: {
      backgroundColor: "#CFE5F1",
      width: "100%",
      marginTop: "25px",
      padding: "30px"
    }
  });
  const classes = useStyles();

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (user["contactName"] === "" || user["contactName"] === undefined) {
      formIsValid = false;
      errors["contactName"] = "Contact person name cannot be blank";
    }
    if (user["contactEmail"] === "" || user["contactEmail"] === undefined) {
      formIsValid = false;
      errors["contactEmail"] = "Contact person email address cannot be blank";
    } else if (!EMAIL_REGEX.test(user["email"])) {
      formIsValid = false;
      errors["email"] = "Invalid contact person email address";
    }
    if (user["contactMobile"] === "" || user["contactMobile"] === undefined) {
      formIsValid = false;
      errors["contactMobile"] = "Contact person mobile no cannot be blank";
    } else if (user["mobile"].length !== 10) {
      formIsValid = false;
      errors["contactMobile"] = "Please enter valid Contact person mobile no";
    }
    if (user["purpose"] === "" || user["purpose"] === undefined) {
      formIsValid = false;
      errors["purpose"] = "Purpose of visit cannot be blank";
    }

    setErrors(errors);
    return formIsValid;
  };

  let onCancel = e => {
    history.push("/cancel");
  };

  const changeControlValue = (e, type) => {
    const value = e.target.value;
    setUser({ ...user, [type]: value });
  };
  return (
    <>
      <div className="registrationForm">
        <div className="headingContent">
          <h1>Welcome to QuEST Global</h1>
          <p>
            Please fill the below details and get an access card from the
            Security Desk.
          </p>
        </div>
        <div className="subHeading">
          <h2> Step 2 of 2 - Contact Detail.</h2>
        </div>
        <Card className={classes.card}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="contactName"
                label="Contact Person Name"
                placeholder="Enter Name"
                name="contactName"
                autoComplete="contactName"
                autoFocus
                value={user["contactName"]}
                onChange={e => changeControlValue(e, "contactName")}
                error={errors["contactName"] ? true : false}
                helperText={errors["contactName"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="contactEmail"
                label="Contact Person Email Id"
                placeholder="Enter Email Id"
                name="contactEmail"
                autoComplete="contactEmail"
                autoFocus
                value={user["contactEmail"]}
                onChange={e => changeControlValue(e, "contactEmail")}
                error={errors["contactEmail"] ? true : false}
                helperText={errors["contactEmail"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="contactMobile"
                label="Contact Person Mobile No"
                placeholder="Enter 10 Digit Number"
                name="contactMobile"
                autoComplete="contactMobile"
                autoFocus
                value={user["contactMobile"]}
                onChange={e => changeControlValue(e, "contactMobile")}
                error={errors["contactMobile"] ? true : false}
                helperText={errors["contactMobile"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                select
                fullWidth
                id="purpose"
                label="Purpose Of Visit"
                name="purpose"
                value={user["purpose"]}
                onChange={e => changeControlValue(e, "purpose")}
                error={errors["purpose"] ? true : false}
                helperText={errors["purpose"]}
              >
                <MenuItem key={"10"} value={"10"}>
                  {"Official"}
                </MenuItem>
                <MenuItem key={"20"} value={"20"}>
                  {"Personal"}
                </MenuItem>
                <MenuItem key={"30"} value={"30"}>
                  {"Interview"}
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                margin="normal"
                multiline
                fullWidth
                id="description"
                label="Meeting Description(optional)"
                placeholder="Write you description here"
                name="description"
                autoComplete="description"
                autoFocus
                value={user["meetingDescription"]}
                onChange={e => changeControlValue(e, "meetingDescription")}
                error={errors["meetingDescription"] ? true : false}
                helperText={errors["meetingDescription"]}
              />
            </Grid>
          </Grid>
        </Card>
      </div>
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <Button variant="contained" onClick={e => onCancel(e)}>
            CANCEL
          </Button>
        </Grid>
        <Grid item xs={6} align="right">
          <Button
            variant="contained"
            color="primary"
            onClick={e => onSubmit(e)}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactPersonDetails;
