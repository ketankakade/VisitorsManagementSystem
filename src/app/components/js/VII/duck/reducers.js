import {
   USER_REGISTER,
   VALIDATE_USER,
   CREATE_VISITOR
} from './types';

const initialState = {
    otp: {},
    email:{},
    visitor:{},
};

export const visitorReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return Object.assign({}, state, { email: action.payload });
        case VALIDATE_USER:
            return Object.assign({}, state, { otp: action.payload });
        case CREATE_VISITOR:
            return Object.assign({}, state, { visitor: action.payload });
        default:
            return state;
    }
};