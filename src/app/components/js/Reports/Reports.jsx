import React from 'react';
import MaterialTable from 'material-table';
import Link from "@material-ui/core/Link";
import VisitorsGraph from './VisitorsGraph'
const secutiryData = require("../../../common/data/SecurityData.json");
const visitorData = require("./../../../common/data/VisitorsData.json");

export default function Reports() {

    const cursor = {cursor: 'pointer'}
    console.log("Sec ",secutiryData.data);
    const rows = visitorData.data;
    let obj= [];
    const activeDetection= function (arg) {
        if(arg==true) {
            return 'YES'
        }
        else {
            return 'NO'
        }
    }
    for (let i in rows) {
        console.log("rows ",rows[i])
        let temp =
        {
            name : rows[i].name,
            mobile : rows[i].mobile,
            emailId : rows[i].emailId,
            purpose: rows[i].visiting.purpose,
            contact_name: rows[i].visiting.name,
            active: activeDetection(rows[i].active)
        }
        obj.push(temp);
    }

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name',
      render: obj => <Link tooltip="View Visitor Details" style={cursor} to="/reports">{obj.name}</Link>,
      },
      { title: 'Contact No', field: 'mobile'},
      { title: 'Email Id', field: 'emailId'},
      { title: 'Purpose', field: 'purpose'},
      { title: 'Contact Person', field: 'contact_name'},
      { title: 'Active Visit', field: 'active'},
    ],
    data: obj,
  });

  return (
    <div>
    <MaterialTable
      title="List Of Visitors"
      columns={state.columns}
      data={state.data}
      
    />
    <br />
    <VisitorsGraph />
    </div>
  );
}