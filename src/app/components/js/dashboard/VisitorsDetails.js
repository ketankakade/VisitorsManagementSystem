import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
// import Button from '@material-ui/core/Button';
import "../../css/VisitorDetails.scss";


import detailsRedux from "../duck";

const { operations } = detailsRedux;
const { getAllVisitorsDetails } = operations;

function VisitorsDetails(props) {
  const [visitor, setVisitor] = useState({});

  useEffect(() => {
    props
      .getAllVisitorsDetails()
      .then(data => {
        debugger;
        setVisitor(data.filter(f => f.visitorId === +props.visitorId)[0]);
      })
      .catch(() => {});
  }, [props]);

  const [idType, setIdType] = React.useState("");
  // const [file, setFile] = React.useState('');

  const handleChange = event => {
    setIdType(event.target.value);
  };

  return (
    <div className="visitorDetailsForm">
      <h1>Visitor Details</h1>
      <img
        alt="Avtar"
        className="visitorAvtar"
        src={process.env.PUBLIC_URL + "/images/Avatar.png"}
      />
      <Grid className="parentTable" container spacing={4}>
        <table className="VisitorTable" style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Visitor Name </p>
              {visitor.firstName} {visitor.lastName}
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Visitor Email Id</p>
              {/* <br /> */}
              {visitor.email}
            </td>
          </tr>
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Visitor Contact no </p>
              {visitor.contactNo}
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Visitor Id Proof</p>
              {visitor.idProof}
            </td>
          </tr>
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Scheduled start meeting </p>
              {visitor.visits && visitor.visits.length > 0
                ? visitor.visits[0].timeSlot.startTime
                : ""}
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Scheduled end meeting </p>
              {visitor.visits && visitor.visits.length > 0
                ? visitor.visits[0].timeSlot.endTime
                : ""}
            </td>
          </tr>
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Purpose of Visit</p>
              {visitor.reasonForVisit}
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Status </p>
              Visited
            </td>
          </tr>
          <Divider />
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Entry Date time</p>
                {visitor.visits && visitor.visits.length > 0
                ? visitor.visits[0].timeSlot.startTime
                : ""}
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Exit Date time </p>
                {visitor.visits && visitor.visits.length > 0
                ? visitor.visits[0].timeSlot.endTime
                : ""}
            </td>
          </tr>
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Visitor Pass No.</p>
              147890
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Pass returned </p>
              yes
            </td>
          </tr>
          <Divider />
          <tr>
            <td style={{ width: "50%", fontweight: "bold" }}>
              <p className="tableStyle">Contact Person Name</p>
              147890
            </td>
            <td style={{ width: "50%" }}>
              <p className="tableStyle">Contact Person email id </p>
              yes
            </td>
          </tr>
          <tr>
           <td style={{ width: "50%" }}>
              <p className="tableStyle">Meeting Description </p>
              {visitor.reasonForVisit}
            </td>
          </tr>
          <Divider />
          {/* <div className="backbutton">
          <Button variant="contained">Back</Button>
          </div> */}
        </table>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllVisitorsDetails: () => dispatch(getAllVisitorsDetails())
  };
};
export default connect(null, mapDispatchToProps)(VisitorsDetails);
