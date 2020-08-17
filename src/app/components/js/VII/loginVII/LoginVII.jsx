import React, { Fragment, useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  CardContent,
  Card,
  InputAdornment
} from "@material-ui/core";
import "../loginVII/LoginVII.scss";
import EmailIcon from '@material-ui/icons/Email';
import { useHistory } from "react-router-dom";
import detailsRedux from "../../duck";
import { connect } from "react-redux";

const { operations } = detailsRedux;
const { userLoginDetails, setUserSessionDetails } = operations;

// const UserData = require("./../../../common/data/UserData.json");

function LoginVII(props) {
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user !== "" && JSON.parse(user).id > 0) {
      history.push("/home");
    }
  }, [props]);

  const EMAIL_REGEX = /^([\w+-]+(?:\.[\w+-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  const [email, setEmail] = useState("");
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
    setErrors(errors);
    return formIsValid;
  };

  const changeControlValue = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const logIn = () => {
    if (validateForm()) {
      let errors = {};
      props
        .userLoginDetails(email.toLowerCase())
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
          <Grid container justify="flex-end" className="row">
            <Grid item xs={12} sm={12} md={6} lg={9} xl={8} justify="flex-end">
              
              <Card>
                <CardContent>
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
                      To Sign In, we will send you OTP on your registered email Id.
                    </p>
                    
                    <p className={"error"}>{errors["signInFailed"]}</p>
                    <Button
                      onClick={() => logIn()}
                      type="button"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      SEND OTP
                    </Button>
                    
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

//export default Login;
// const mapStateToProps = ({ details }) => {
//   return {
//     details: details? details.userDetails:{}
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    userLoginDetails: (email) =>
      dispatch(userLoginDetails(email)),
    setUserSessionDetails: user => dispatch(setUserSessionDetails(user))
  };
};
export default connect(null, mapDispatchToProps)(LoginVII);
