import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import '../../../components/css/dashboard.scss';

// Generate Order Data
function createData(id, name, mobNo, emailId, cpName, purpose) {
  return { id, name, mobNo, emailId, cpName, purpose };
}

const rows = [
  createData(0, 'Asha Dave', 9456778785, 'asha@gmail.com', 'Shraddha', 'Interview'),
  createData(1, 'Meera Vyas', 7856778788, 'meera@gmail.com', 'Rashi', 'Joining'),
  createData(2, 'Mohanlal', 8756778765, 'mohan@gmail.com', 'Pravin', 'Vendor')
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Title(props) {
  return (
    <Typography className="tabTitle" component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className="parent">
      <Title>Recent Visitors</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Mobile No</TableCell>
            <TableCell>Email Id</TableCell>
            <TableCell>Contact Person</TableCell>
            <TableCell>Purpose Of Visit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.mobNo}</TableCell>
              <TableCell>{row.emailId}</TableCell>
              <TableCell>{row.cpName}</TableCell>
              <TableCell>{row.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Visitors
        </Link>
      </div> */}
    </div>
  );
}