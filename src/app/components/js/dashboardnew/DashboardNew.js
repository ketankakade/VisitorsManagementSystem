import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PieChart from "./Chart";
import ButtonBase from "@material-ui/core/ButtonBase";
import { connect } from "react-redux";
import detailsRedux from "../duck";
import { useHistory } from "react-router-dom";
import TempCardUsers from "../../js/dashboard/TempCardUsers";
// import EnhancedTable from '../../js/dashboard/thisMonth';

const { operations } = detailsRedux;
const { getAllVisitorsDetails } = operations;

const visitorData = require("./../../../common/data/VisitorsData.json");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },

  cardMargin: {
    marginBottom: "17px"
  },
  cardButton: {
    width: "100%"
  },
  header: {
    textAlign: "left",
    width: "100%",
    fontSize: "18px"

  },
  subheader: {
    fontSize: "14px"
  },
  visitor: {
    display: "flex",
    flexDirection: "row"
  },
  visitorTitle: {
    display: "flex",
    width: "80%",
    fontSize: "18px",
    color: "#0488bd"
  },
  category: {
    display: "flex",
  },
  type: {
    display: "flex",
    width: "20%",
    marginRight: "10px",
    fontSize: "10px"
  },
  avatar: {
    backgroundColor: "red"
  },
  keyImage: {
    height: "50px",
    width: "50px"
  },
  headline: {
    fontSize: '26px',
    color: 'red'
  },
  headlinePrev: {
    fontSize: '26px',
    color: '#0f72a1'
  }

}));

const DashboardNew = () => {
  const classes = useStyles();
  const history = useHistory();
  const [category, setCategory] = useState("10");
  const [type, setType] = useState("10");

  const handleCardClick = type => {
    history.push("/" + type);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              title={
                <div className={classes.visitor}>
                  <div className={classes.visitorTitle}>
                    Today's Total Visitors
                  </div>
                  <div className={classes.type}>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="normal"
                      required
                      select
                      fullWidth
                      id="type"
                      label="Type"
                      name="type"
                    >
                      <MenuItem value={10}>All office Locations</MenuItem>
                      <MenuItem value={20}>4th floor</MenuItem>
                      <MenuItem value={30}>5th floor</MenuItem>
                    </TextField>
                  </div>
                </div>
              }
              subheader=""
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="div">
                <PieChart />
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Grid item xs={12} className={classes.cardMargin}>
            <Card className={classes.card}>
              <ButtonBase
                className={classes.cardButton}
                onClick={e => {
                  handleCardClick("Visitors");
                }}
              >
                <CardHeader
                  className={classes.header}
                  avatar={
                    <img alt="" src={process.env.PUBLIC_URL + "/images/noun_identity card_2035079 (2).svg"} />
                  }
                  title={<div className={classes.headlinePrev}>
                    Visitors
                  </div>}
                  subheader={
                    <div className={classes.subheader}>
                      Pending for approval
                    </div>
                  }
                />
              </ButtonBase>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.cardMargin}>
            <Card className={classes.card}>
              <ButtonBase
                className={classes.cardButton}
                onClick={e => {
                  handleCardClick("Employees");
                }}
              >
                <CardHeader
                  className={classes.header}
                  avatar={
                    <img className={classes.keyImage} alt="" src={process.env.PUBLIC_URL + "/images/001-key-card@2x.png"} />
                  }
                  title={<div className={classes.headlinePrev}>
                    Employees
                  </div>}
                  subheader={
                    <div className={classes.subheader}>
                      Temporary access card used today
                    </div>
                  }
                />
              </ButtonBase>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <ButtonBase
                className={classes.cardButton}
                onClick={e => {
                  handleCardClick("Users");
                }}
              >
                <CardHeader
                  className={classes.header}
                  avatar={
                    <img alt="" src={process.env.PUBLIC_URL + "/images/Group 3445 (1).svg"} />
                  } title={<div className={classes.headline}>
                    Users
                  </div>
                  }
                  subheader={
                    <div className={classes.subheader}>
                      haven't returned the access card today.
                    </div>
                  }
                />
              </ButtonBase>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardHeader className={classes.header} title="Active Visitors" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="div">
                <TempCardUsers title={""}></TempCardUsers>
                {/* <EnhancedTable title={""}></EnhancedTable> */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVisitorsDetails: (email, password) =>
      dispatch(getAllVisitorsDetails(email, password))
  };
};
export default connect(null, mapDispatchToProps)(DashboardNew);
