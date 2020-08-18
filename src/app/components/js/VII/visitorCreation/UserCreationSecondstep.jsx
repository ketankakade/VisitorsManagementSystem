import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "../visitorCreation/VisitorRegistration.scss";

function UserCreation() {
  const useStyles = makeStyles({
    card: {
      padding: "30px"
    },
    container: {
      backgroundColor: "#CFE5F1",
      width: "100%",
      marginTop: "45px",
      padding: "30px"
    }
  });

  const TextFieldClasses = useStyles();
  const classes = useStyles();

  // const [idType, setIdType] = React.useState("");

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
                id="name"
                label="Contact Person Name"
                placeholder="Enter Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Contact Person Email Id"
                placeholder="Enter Email Id"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Contact Person Mobile No"
                placeholder="Enter 10 Digit Number"
                name="mobile"
                autoComplete="mobile"
                autoFocus
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
              />
            </Grid>
          </Grid>
        </Card>
      </div>
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <Button variant="contained">CANCEL</Button>
        </Grid>
        <Grid item xs={6} align="right">
          <Button variant="contained" color="primary">
            NEXT
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

UserCreation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default UserCreation;
