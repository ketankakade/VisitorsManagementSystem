import {
    USER_LOGIN,
    SET_USER_SESSION,
    GET_USER_SESSION,
    CLEAR_USER_SESSION,
    GET_VISITORS_LIST
  } from './types';
  
  export function getAllVisitors(payload) {
    return { type:GET_VISITORS_LIST , payload };
  }
  
  export function userLogin(payload) {
    return { type:USER_LOGIN , payload };
  }

  export function getUserSession(payload) {
    return { type:GET_USER_SESSION , payload };
  }
  
  export function setUserSession(payload) {
    return { type:SET_USER_SESSION , payload };
  }

  export function clearUserSession(payload) {
    return { type:CLEAR_USER_SESSION , payload };
  }
  
  
  
  const actionsObj = {
    getAllVisitors,
    userLogin,
    getUserSession,
    setUserSession,
    clearUserSession,
  };
  
  export default actionsObj;
  
  export const actions = actionsObj;