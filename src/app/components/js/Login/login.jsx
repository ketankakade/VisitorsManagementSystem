import React, { Fragment, useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Typography,
  CardContent,
  Card,
  InputAdornment
} from "@material-ui/core";
import "../Login/login.scss";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";
import detailsRedux from "../duck";
import { connect } from "react-redux";

const { operations } = detailsRedux;
const { userLoginDetails, setUserSessionDetails } = operations;

// const UserData = require("./../../../common/data/UserData.json");

function Login(props) {
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user !== "" && JSON.parse(user).id > 0) {
      history.push("/home");
    }
  }, [props]);

  const EMAIL_REGEX = /^([\w+-]+(?:\.[\w+-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (email === "" || email === undefined) {
      formIsValid = false;
      errors["email"] = "Email address cannot be blank";
    } else {
      if (!EMAIL_REGEX.test(email)) {
        formIsValid = false;
        errors["email"] = "Invalid email address";
      }
    }
    if (password === "") {
      formIsValid = false;
      errors["password"] = "Password cannot be blank";
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
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const logIn = () => {
    if (validateForm()) {
      let errors = {};
      props
        .userLoginDetails(email.toLowerCase(), password)
        .then(data => {
          if (data && data.emailId.toLowerCase() === email.toLowerCase()) {
            props.setUserSessionDetails(data).then(() => {
              history.push("/home");
            });
          } else {
            errors["signInFailed"] = "Invalid login details";
            setErrors(errors);
          }
        })
        .catch(() => {
          errors["signInFailed"] = "Invalid login details";
          setErrors(errors);
        });
    }
  };

  const keyDownControl = e => {
    if (e.key === "Enter") {
      logIn();
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
                  src={process.env.PUBLIC_URL + "/images/Image 4.png"}
                />
                <Typography component="h6" variant="h5">
                  Sign in with your Quest account
                </Typography>
              </div>
              <Card>
                <CardContent>
                  <form noValidate>
                    <TextField
                      error={errors["email"] ? true : false}
                      value={email}
                      onChange={e => changeControlValue(e, "email")}
                      onKeyDown={keyDownControl}
                      helperText={errors["email"]}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      error={errors["password"] ? true : false}
                      value={password}
                      onChange={e => changeControlValue(e, "password")}
                      onKeyDown={keyDownControl}
                      helperText={errors["password"]}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <VpnKeyIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <p className={"error"}>{errors["signInFailed"]}</p>
                    <Button
                      onClick={() => logIn()}
                      type="button"
                      fullWidth
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon></SendIcon>}
                    >
                      Sign In
                    </Button>
                    <Grid container className="links">
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

// const mapStateToProps = ({ details }) => {
//   return {
//     details: details? details.userDetails:{}
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    userLoginDetails: (email, password) =>
      dispatch(userLoginDetails(email, password)),
    setUserSessionDetails: user => dispatch(setUserSessionDetails(user))
  };
};
export default connect(null, mapDispatchToProps)(Login);
