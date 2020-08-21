import {
    USER_REGISTER,
    VALIDATE_USER,
    CREATE_VISITOR,
  } from './types';
  
  export function userRegister(payload) {
    return { type:USER_REGISTER , payload };
  }
  export function validUser(payload) {
    return { type:VALIDATE_USER , payload };
  }

  export function createVisitor(payload) {
    return { type:CREATE_VISITOR , payload };
  }

  const actionsObj = {
    userRegister,
    validUser,
    createVisitor
  };
  
  export default actionsObj;
  
  export const actions = actionsObj;