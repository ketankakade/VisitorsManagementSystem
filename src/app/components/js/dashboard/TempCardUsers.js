import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { connect } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
//import MaterialTable from 'material-table';
import "../../../components/css/dashboard.scss";
import { TableContainer, Paper } from "@material-ui/core";
import detailsRedux from "../duck";

//const visitorData = require("./../../../common/data/VisitorsData.json");

const { operations } = detailsRedux;
const { getAllVisitorsDetails } = operations;

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

// const rows = [];
// const rows = visitorData.data.filter(e=>e.visiting.purpose = 'Forgot the ID card');

// var rows =  visitorData.data.filter(function(e) {
// 	return e.visiting.purpose ==="Forgot the ID card";
// });
//var rows =[];
//console.log("Rows ",rows);

function Title(props) {
  return (
    <Typography
      className="tabTitle"
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};

function TempCardUsers(props) {
  const [visitorData, setVisitorData] = useState([]);
  useEffect(() => {
    props
      .getAllVisitorsDetails()
      .then(data => {
        setVisitorData(data);
        //console.log("temp card users");
       // console.log(data);
      })
      .catch(() => {});
  }, [props]);

  const useStyles = makeStyles({
    table: {
      minWidth: 700
    }
  });
  const history = useHistory();

  const classes = useStyles();
  const handleRowClick = row => {
    history.push("/VisitorDetails/" +row.visitorId );
  };

  
  return (
    <div className="parent">
     {props.title !=='' &&
     <Title>{props.title} List</Title>}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Mobile No</StyledTableCell>
              <StyledTableCell align="left">Email Id</StyledTableCell>
              <StyledTableCell align="left">Contact Person</StyledTableCell>
              <StyledTableCell align="left">Reason for Visit</StyledTableCell>
              <StyledTableCell align="left">Is Active</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visitorData.map(row => (
              <StyledTableRow key={row.visitorId} onClick={e => {
                handleRowClick(row);
              }}>
                <StyledTableCell align="left">{row.firstName} {row.lastName} </StyledTableCell>
                <StyledTableCell align="left">{row.contactNo}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">
                  {row.visits[0].contactPerson.firstName} {row.visits[0].contactPerson.lastName}
                  </StyledTableCell>
                <StyledTableCell align="left">{row.reasonForVisit}</StyledTableCell>
                <StyledTableCell align="left">
                  { props.showTitle!=='' ? "Yes" : "No"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
                </TableBody> 
        </Table>
      </TableContainer>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Visitors
        </Link>
      </div> */}
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    getAllVisitorsDetails: () => dispatch(getAllVisitorsDetails())
  };
};
export default connect(null, mapDispatchToProps)(TempCardUsers);
