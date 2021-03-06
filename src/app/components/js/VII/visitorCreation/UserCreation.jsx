import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import "../visitorCreation/VisitorRegistration.scss";

function UserCreation(props) {
  const [user, setUser] = useState({});

  const EMAIL_REGEX = /^([\w+-]+(?:\.[\w+-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const PAN_REGEX = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  const history = useHistory();

  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    debugger;
    if (!(props && props.location && props.location.state)) {
      history.push("/VIIlogin");
    } else {
      const email = props.location.state.email;
      if (!(email && user.email !== "")) {
        history.push("/VIIlogin");
      } else {
        setUser({ email: email });
      }
    }
  }, [props, setUser]);

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (user["name"] === "" || user["name"] === undefined) {
      formIsValid = false;
      errors["name"] = "Name cannot be blank";
    }
    if (user["email"] === "" || user["email"] === undefined) {
      formIsValid = false;
      errors["email"] = "Email address cannot be blank";
    } else if (!EMAIL_REGEX.test(user["email"])) {
      formIsValid = false;
      errors["email"] = "Invalid email address";
    }
    if (user["mobile"] === "" || user["mobile"] === undefined) {
      formIsValid = false;
      errors["mobile"] = "Mobile No cannot be blank";
    } else if (user["mobile"].length !== 10) {
      formIsValid = false;
      errors["mobile"] = "Please enter valid Mobile no";
    }
    if (user["pan"] === "" || user["pan"] === undefined) {
      formIsValid = false;
      errors["pan"] = "PAN No cannot be blank";
    } else if (!PAN_REGEX.test(user["pan"])) {
      formIsValid = false;
      errors["pan"] = "Invalid PAN number";
    }

    setErrors(errors);
    return formIsValid;
  };

  let onSubmit = e => {
    if (validateForm()) {
      e.preventDefault();
      console.log(user);
      //history.push("/contactPersonDetails");
      history.push({
        pathname: "/contactPersonDetails",
        state: {
          user: user
        }
      });
    }
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
          <h2> Step 1 of 2 - Personal Detail.</h2>
        </div>
        <Card className={classes.card}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                placeholder="Enter Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={user["name"]}
                onChange={e => changeControlValue(e, "name")}
                error={errors["name"] ? true : false}
                helperText={errors["name"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Id"
                placeholder="Enter Email Id"
                name="email"
                autoComplete="email"
                autoFocus
                value={user["email"]}
                onChange={e => changeControlValue(e, "email")}
                error={errors["email"] ? true : false}
                helperText={errors["email"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile No"
                placeholder="Enter 10 Digit Number"
                name="mobile"
                autoComplete="mobile"
                autoFocus
                value={user["mobile"]}
                onChange={e => changeControlValue(e, "mobile")}
                error={errors["mobile"] ? true : false}
                helperText={errors["mobile"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="pan"
                label="PAN No"
                placeholder="Enter PAN Number"
                name="pan"
                autoComplete="pan"
                autoFocus
                value={user["pan"]}
                onChange={e => changeControlValue(e, "pan")}
                error={errors["pan"] ? true : false}
                helperText={errors["pan"]}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                margin="normal"
                multiline
                fullWidth
                id="description"
                label="Description(optional)"
                placeholder="Write you description here"
                name="description"
                autoComplete="description"
                autoFocus
                value={user["description"]}
                onChange={e => changeControlValue(e, "description")}
                error={errors["description"] ? true : false}
                helperText={errors["description"]}
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
            {" "}
            NEXT
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    // signUpSuccess: () => dispatch(signUpSuccess())
  };
};

export default connect(null, mapDispatchToProps)(UserCreation);
