import {
    GET_VISITORS_LIST,
    USER_LOGIN
} from './types';

const initialState = {
    visitorList: {},
    userDetails:{}
};

export const vmsDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VISITORS_LIST:
            return Object.assign({}, state, { visitorsList: action.payload });
        case USER_LOGIN:
            return Object.assign({}, state, { userDetails: action.payload });
        default:
            return state;
    }
};