import React, { Fragment, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  InputAdornment
} from "@material-ui/core";
import "../loginVII/LoginVII.scss";
import EmailIcon from "@material-ui/icons/Email";
import { useHistory } from "react-router-dom";
import visitorRedux from "../duck";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const { operations } = visitorRedux;
const { userRegisterDetails, validateUser } = operations;

console.log(operations);
// const UserData = require("./../../../common/data/UserData.json");
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#CFE5F1",
    width: "100%"
  }
}));
function StartupScreen(props) {
  const history = useHistory();
  const classes = useStyles();

  const EMAIL_REGEX = /^([\w+-]+(?:\.[\w+-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (!showOtp) {
      if (email === "" || email === undefined) {
        formIsValid = false;
        errors["email"] = "Email address cannot be blank";
      } else {
        if (!EMAIL_REGEX.test(email)) {
          formIsValid = false;
          errors["email"] = "Invalid email address";
        }
      }
    } else {
      if (otp === "" || otp === undefined) {
        formIsValid = false;
        errors["otp"] = "OTP cannot be blank";
      }
    }
    setErrors(errors);
    return formIsValid;
  };

  const changeControlValue = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "otp":
        setOtp(value);
        break;
      default:
        break;
    }
  };

  const otpClicked = () => {
    console.log(props);
    if (validateForm()) {
      let errors = {};
      if (!showOtp) {
        props
          .userRegisterDetails(email.toLowerCase())
          .then(data => {
            if (data && data.emailId.toLowerCase() === email.toLowerCase()) {
              setShowOtp(true);
            } else {
              errors["signInFailed"] = "Invalid email address";
              setErrors(errors);
            }
          })
          .catch(() => {
            errors["signInFailed"] = "Invalid email address";
            setErrors(errors);
          });
      } else {
        props
          .validateUser(email.toLowerCase(), otp)
          .then(data => {
            if (data && data.emailId.toLowerCase() === email.toLowerCase()) {
              debugger;
              history.push({
                pathname: "/visitorTemplate",
                state: {
                  email: email
                }
              });
             // history.push("/visitorTemplate");
            } else {
              errors["signInFailed"] = "Invalid OTP";
              setErrors(errors);
            }
          })
          .catch(() => {
            errors["signInFailed"] = "Invalid OTP";
            setErrors(errors);
          });
      }
    }
  };

  const keyDownControl = e => {
    if (e.key === "Enter") {
      otpClicked();
    }
  };

  return (
    <Fragment>
      <div className="login-content">
        <div className="sign-in">
          <Grid container justify="center" className="row">
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <div className="centered">
                <img
                  alt="Quest"
                  className="logo"
                  src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                />
              </div>
              <Typography component="h6" variant="h6">
                SIGN IN
              </Typography>
              {!showOtp && (
                <form noValidate>
                  <TextField
                    error={errors["email"] ? true : false}
                    value={email}
                    onChange={e => changeControlValue(e, "email")}
                    onKeyDown={keyDownControl}
                    helperText={errors["email"]}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email ID"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  <p>
                    To Sign In, we will send you OTP on your registered email
                    Id.
                  </p>

                  <p className={"error"}>{errors["signInFailed"]}</p>
                  <Button
                    onClick={() => otpClicked()}
                    type="button"
                    fullWidth
                    variant="contained"
                    className={classes.button}
                  >
                    SEND OTP
                  </Button>
                </form>
              )}
              {showOtp && (
                <form noValidate>
                  <TextField
                    error={errors["otp"] ? true : false}
                    value={otp}
                    onChange={e => changeControlValue(e, "otp")}
                    onKeyDown={keyDownControl}
                    helperText={errors["otp"]}
                    margin="normal"
                    required
                    fullWidth
                    id="otp"
                    label="Enter Otp"
                    name="otp"
                    autoComplete="otp"
                    autoFocus
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button>Resend Otp</Button>
                        </InputAdornment>
                      )
                    }}
                  />
                  <p>
                    An OTP has been sent on your registered email Id -{email}
                  </p>

                  <p className={"error"}>{errors["signInFailed"]}</p>
                  <Button
                    onClick={() => otpClicked()}
                    type="button"
                    fullWidth
                    variant="contained"
                    className={classes.button}
                  >
                    SIGN IN
                  </Button>
                </form>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

//export default Login;
// const mapStateToProps = ({ details }) => {
//   return {
//     details: details? details.userDetails:{}
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    userRegisterDetails: email => dispatch(userRegisterDetails(email)),
    validateUser: (email, otp) => dispatch(validateUser(email, otp))
  };
};
export default connect(null, mapDispatchToProps)(StartupScreen);
