import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  h1: {
    fontSize: "14px"
  },
  card: {
    marginTop: "10px",
    textAlign: "center",
    paddingTop: theme.spacing(1),
    color: theme.palette.text.secondary,
    border: "1px solid"
  },
  avatar: {
    margin:'auto',
    backgroundColor: "grey"
  }
}));
function VisitorBadge() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <h1>Send your visitor pass detail to security desk for approval.</h1>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              // image={require("./app/Avatar.png")}
              avatar={<Avatar className={classes.avatar}>V</Avatar>}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Leena Patil
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                leena.patil@quest-global.com
              </Typography>
                <Divider />
              <Typography variant="body2" component="p">
              Contact person
              </Typography>
              <Typography variant="h5" component="h2">
                Rama Maddela 
               </Typography>
              <Typography className={classes.pos} color="textSecondary">
                leena.patil@quest-global.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
}

export default VisitorBadge;
