import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import "../VII/VisitorRegistration.scss";
import Button from "@material-ui/core/Button";

function UserCreation() {
  const useStyles = makeStyles({
    root: {
      lineHeight: "0.5px",
      border: "2px solid #CFE5F1",
      borderRadius: "10px"
    },
    card: {
      padding: "30px"
    }
  });

  const TextFieldClasses = useStyles();
  const classes = useStyles();

  // const [idType, setIdType] = React.useState("");

  return (
    <div className="registrationForm">
      <div className="headingContent">
        <h1>Welcome to QuEST Global</h1>
        <p>
          Please fill the below details and get an access card from the Security
          Desk.
        </p>
      </div>      
        <div className="subHeading">
          <h2> Step 1 of 2 - Personal Detail.</h2>
        </div>
      <Card className={classes.card}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="Name"
              label="Name"
              fullWidth
              classes={{
                root: TextFieldClasses.root
              }}
              autoComplete="given-name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="Email Address"
              label="email"
              fullWidth
              classes={{
                root: TextFieldClasses.root
              }}
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="mobileNo"
              name="mobileNo"
              label="Mobile Number"
              fullWidth
              classes={{
                root: TextFieldClasses.root
              }}
              autoComplete="mobile number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="panNo"
              name="panNo"
              label="PAN Number"
              fullWidth
              classes={{
                root: TextFieldClasses.root
              }}
              autoComplete="pan number"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Description(optional)"
              placeholder="Write your description here"
              fullWidth
              classes={{
                root: TextFieldClasses.root
              }}
              autoComplete="Description"
            />
          </Grid>
        </Grid>
      </Card>
      <Grid item xs={12} sm={2}>
        <FormControl fullWidth>
          <Button variant="contained">NEXT</Button>
        </FormControl>
      </Grid>
    </div>
  );
}

UserCreation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default UserCreation;
