import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {connect } from 'react-redux';
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "../../../components/css/dashboard.scss";
import { TableContainer, Paper } from "@material-ui/core";
import detailsRedux from "../duck";


const visitorData = require("./../../../common/data/VisitorsData.json");

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

// const rows = visitorData.data.filter(e=>e.visiting.purpose = 'Forgot the ID card');

var rows =  visitorData.data.filter(function(e) {
	return e.visiting.purpose ==="Forgot the ID card";
});

console.log("Rows ",rows);

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
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700
    }
  });

  const classes = useStyles();
  return (
    <div className="parent">
      <Title>Visitors List</Title>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="right">Mobile No</StyledTableCell>
              <StyledTableCell align="left">Email Id</StyledTableCell>
              <StyledTableCell align="left">Id No</StyledTableCell>
              <StyledTableCell align="left">Active Visit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.mobile}</StyledTableCell>
                <StyledTableCell align="left">{row.emailId}</StyledTableCell>                
                <StyledTableCell align="left">{row.idNo}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.active ? 'Yes' : 'No'}
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
    getAllVisitorsDetails: (email,password) => dispatch(getAllVisitorsDetails(email,password))
  };
};
export default connect(null, mapDispatchToProps)(TempCardUsers);