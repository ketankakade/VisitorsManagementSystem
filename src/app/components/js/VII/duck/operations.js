import axios from "axios";

import { userRegister, validUser, createVisitor } from "./actions";
const UserData = require("../../../../common/data/UserData.json");

const userRegisterDetails = email => dispatch => {
  return new Promise((resolve, reject) => {
    if (email !== "") {
      try {
        var user = UserData.data.find(
          f => f.emailId.toLowerCase() === email.toLowerCase()
        );
        const resp = userRegister(user);
        console.log(resp);
        dispatch(resp);
        resolve(user);
      } catch (e) {
        console.error("error");
        reject(e);
      }
    } else {
      console.error("Error in userRegister: insufficient details");
    }
  });
};
const validateUser = (email, otp) => dispatch => {
  return new Promise((resolve, reject) => {
    if (otp !== "") {
      try {
        var user = UserData.data.find(
          f => f.otp === otp && f.emailId === email
        );

        const resp = validUser(user);
        console.log(resp);
        dispatch(resp);
        resolve(user);
      } catch (e) {
        console.error("error");
        reject(e);
      }
    } else {
      console.error("Error in userValidate: insufficient details");
    }
  });
};

const registerVisitor = req => dispatch => {
  return new Promise((resolve, reject) => {
    let url = "http://localhost:8085/vms-gateway/visitor";

    var dt = new Date();

    var startTime =
      dt.getFullYear() +
      "-" +
      ("0" + (dt.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dt.getDate()).slice(-2) +
      " " +
      ("0" + dt.getHours()).slice(-2) +
      ":" +
      ("0" + dt.getMinutes()).slice(-2);

    const postData = {
      contactNo: req.mobile,
      email: req.email,
      firstName: req.name,
      idProof: req.pan,
      lastName: req.name,
      placeOfVisit: "Pune",
      reasonForVisit: req.purpose,
      visitorType: "",
      visits: [
        {
          visitDate: startTime.split(" ")[0],
          contactPerson: {
            contactNo: req.contactMobile,
            email: req.contactEmail,
            firstName: req.contactName,
            lastName: req.contactName
          },
          devices: [
            {
              deviceMake: "",
              serialNumber: "",
              deviceType: "",
              isSecurityCheckDone: "True",
              securityFlaws: "Ok"
            }
          ],
          timeSlot: {
            endTime: startTime,
            startTime: startTime
          }
        }
      ]
    };

    axios
      .post(url, postData)
      .then(response => {
        try {
          console.log(response);
          if (response && response.data && response.data.statusCode === 200) {
            const resp = createVisitor(response.data);
            dispatch(resp);
            resolve(req);
          } else {
            console.error("Error in createVisitor: invalid details");
          }
        } catch (e) {
          console.log("error");
          reject(e);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const operations = {
  userRegisterDetails,
  validateUser,
  registerVisitor
};

export default operations;
