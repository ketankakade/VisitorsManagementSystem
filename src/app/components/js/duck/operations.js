// import axios from 'axios';
import { userLogin, getUserSession, setUserSession, clearUserSession, getAllVisitors } from './actions';

const UserData = require("./../../../common/data/UserData.json");
const visitorData = require("./../../../common/data/VisitorsData.json");


const userLoginDetails = (email, password) => (dispatch) => {

    return new Promise((resolve, reject) => {

        if (email !== "" && password !== "") {

            try {
                var user = UserData.data.find(
                    f =>
                        f.emailId.toLowerCase() === email.toLowerCase() &&
                        f.password === password
                );

                const resp = userLogin(user);
                console.log(resp)
                dispatch(resp);
                resolve(user);


            }
            catch (e) {
                console.error('error');
                reject(e);
            }
        }
        else {
            console.error('Error in userlogin: insufficient details');
        }
    });
};


const setUserSessionDetails = (user) => (dispatch) => {

    return new Promise((resolve, reject) => {

        try {
            localStorage.setItem("user", JSON.stringify(user));
            const resp = setUserSession(true);
            dispatch(resp);
            resolve(true);
        }
        catch (e) {
            console.error('error');
            reject(e);
        }

    });
};


const getUserSessionDetails = () => (dispatch) => {

    return new Promise((resolve, reject) => {

        try {
            const data = JSON.parse(localStorage.getItem("user"));
            const resp = getUserSession(data);
            dispatch(resp);
            resolve(data);
        }
        catch (e) {
            console.error('error');
            reject(e);
        }

    });
};


const clearUserSessionDetails = () => (dispatch) => {

    return new Promise((resolve, reject) => {

        try {
            localStorage.removeItem("user");
            const resp = clearUserSession(true);
            dispatch(resp);
            resolve(true);
        }
        catch (e) {
            console.error('error');
            reject(e);
        }
    });
};


const getAllVisitorsDetails = () => (dispatch) => {

    return new Promise((resolve, reject) => {

        if (true) {

            try {

                if (visitorData && visitorData) {
                    const resp = getAllVisitors(visitorData);
                    console.log(resp)
                    dispatch(resp);
                    resolve(visitorData);

                }
                else {
                    console.error('Error in getAllVisitorsDetails: invalid details');
                }
            }
            catch (e) {
                console.error('error');
                reject(e);
            }
        }
        else {
            console.error('Error in getAllVisitorsDetails: insufficient details');
        }
    });
};


export const operations = {
    userLoginDetails,
    setUserSessionDetails,
    getUserSessionDetails,
    clearUserSessionDetails,
    getAllVisitorsDetails
}

export default operations;