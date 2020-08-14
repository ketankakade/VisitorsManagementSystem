import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import MyChart from "./Chart";
import ButtonBase from "@material-ui/core/ButtonBase";
import { connect } from "react-redux";
import detailsRedux from "../duck";
import { useHistory } from "react-router-dom";
import TempCardUsers from "../../js/dashboard/TempCardUsers";
 

const { operations } = detailsRedux;
const { getAllVisitorsDetails } = operations;

const visitorData = require("./../../../common/data/VisitorsData.json");

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  cardButton: {
    width: "100%"
  },
  header: {
    textAlign: "left",
    width: "100%"
  },
  subheader: {
    fontSize: "10px"
  },
  visitor: {
    display: "flex",
    flexDirection: "row"
  },
  visitorTitle: {
    display: "flex",
    width: "60%"
  },
  category: {
    display: "flex",
    width: "20%",
    marginRight: "10px"
  },
  type: {
    display: "flex",
    width: "20%",
    marginRight: "10px"
  },
  avatar: {
    backgroundColor: "red"
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
        <Grid item xs={4}>
          <Card className={classes.card}>
            <ButtonBase
              className={classes.cardButton}
              onClick={e => {
                handleCardClick("Visitors");
              }}
            >
              <CardHeader
                className={classes.header}
                avatar={<Avatar className={classes.avatar}>V</Avatar>}
                title="Visitors"
                subheader={
                  <div className={classes.subheader}>Planned/Visited today</div>
                }
              />
            </ButtonBase>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <ButtonBase
              className={classes.cardButton}
              onClick={e => {
                handleCardClick("Employees");
              }}
            >
              <CardHeader
                className={classes.header}
                avatar={<Avatar className={classes.avatar}>E</Avatar>}
                title="Employees"
                subheader={
                  <div className={classes.subheader}>
                    Used temporary access card
                  </div>
                }
              />
            </ButtonBase>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <ButtonBase
              className={classes.cardButton}
              onClick={e => {
                handleCardClick("Users");
              }}
            >
              <CardHeader
                className={classes.header}
                avatar={<Avatar className={classes.avatar}>U</Avatar>}
                title="Users"
                subheader={
                  <div className={classes.subheader}>
                    haven't returned the card
                  </div>
                }
              />
            </ButtonBase>
          </Card>
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
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              title={
                <div className={classes.visitor}>
                  <div className={classes.visitorTitle}>Visitors</div>
                  <FormControl variant="outlined" className={classes.category}>
                    <InputLabel htmlFor="selectCategory">Category</InputLabel>
                    <Select
                      id="selectCategory"
                      label="Category"
                      value={category}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value={10}>Interview</MenuItem>
                      <MenuItem value={20}>ClientVisit</MenuItem>
                      <MenuItem value={30}>Employees</MenuItem>
                      <MenuItem value={30}>DeliveryBoys</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className={classes.type}>
                    <InputLabel htmlFor="selectType">Type</InputLabel>
                    <Select id="selectType" label="Type" value={type}>
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value={10}>All desk</MenuItem>
                      <MenuItem value={20}>4th floor</MenuItem>
                      <MenuItem value={30}>5th floor</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              }
              subheader=""
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="div">
                <MyChart />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
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
