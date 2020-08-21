import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import visitorRedux from "../duck";
import { connect } from "react-redux";
const { operations } = visitorRedux;
const { registerVisitor } = operations;

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px"
  },
  cardhead: {
    display: "flex",
    justifyContent: "space-between"
  },
  h1: {
    fontSize: "14px"
  },
  header: {
    textAlign: "center"
  },
  card: {
    marginTop: "100px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "1px solid",
    borderColor: "#0F72A1"
  },
  cardContent: {
    padding: "0px",
    lastChild: {
      padding: "0px"
    }
  },
  visitorPhoto: {
    justifyContent: "center"
  },
  pos: {
    fontSize: "14px"
  },
  contact: {
    backgroundColor: "#CEE4EF"
  },
  container: {
    backgroundColor: "#CFE5F1",
    width: "100%",
    marginTop: "25px",
    padding: "30px"
  }
}));

function VisitorBadge(props) {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    debugger;
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

  const postData = e => {
    e.preventDefault();
    let errors = {};
    props
      .registerVisitor(user)
      .then(data => {
        console.log(user);
        if (data && data.email === user.email) {
          history.push("/thanks");
        } else {
          errors["dataloadFailed"] = " Registration Unsuccessful";
          setErrors(errors);
        }
      })
      .catch(() => {
        errors["dataloadFailed"] = "Registration Unsuccessful";
        setErrors(errors);
      });
  };
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      className={classes.root}
      justifyContent="center"
      align="center"
    >
      <h1>Send your visitor pass detail to security desk for approval.</h1>
      <Grid item xs={2}>
        <Card className={classes.card}>
          <Grid item xs={12} className={classes.cardhead}>
            <Grid item xs={6} align="left">
              #21357890
            </Grid>
            <Grid item xs={6} align="right">
              {new Date().toLocaleDateString()}
            </Grid>
          </Grid>
          <CardContent className={classes.cardContent}>
            {
              <img
                className={classes.visitorPhoto}
                alt=""
                src={process.env.PUBLIC_URL + "/images/Ellipse 69@2x.png"}
              />
            }
            <Typography variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {user.mobile}
              <p>{user.email}</p>
            </Typography>
            <Divider />
            <div className={classes.contact}>
              <Typography variant="body2" component="p">
                Contact person
              </Typography>
              <Typography variant="h5" component="h2">
                {user.contactName}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {user.contactEmail}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={6} align="left">
          <Button variant="contained">CANCEL</Button>
        </Grid>
        <Grid item xs={6} align="right">
          <Button variant="contained" color="primary" onClick={postData}>
            SEND
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    registerVisitor: user => dispatch(registerVisitor(user))
  };
};
export default connect(null, mapDispatchToProps)(VisitorBadge);
