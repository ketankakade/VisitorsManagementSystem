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
import "../../css/login.scss";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";

// import { removeTypeDuplicates } from "@babel/types";

const UserData = require("./../../../common/data/UserData.json");



function Login(props) {
    const history = useHistory();
    
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user && user !== "" && JSON.parse(user).id > 0) {
          history.push("/home");
        }
    },[props]);

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
      var index = UserData.data.findIndex(
        f =>
          f.emailId.toLowerCase() === email.toLowerCase() &&
          f.password === password
      );
      if (index > -1) {
        localStorage.setItem("user", JSON.stringify(UserData.data[index]));
        history.push("/home");
      } else {
        let errors = {};
        errors["signInFailed"] = "Invalid login details";
        setErrors(errors);
      }
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

export default Login;
