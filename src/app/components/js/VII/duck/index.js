import {visitorReducer} from './reducers';
import {operations} from './operations';
import {actions} from './actions';

const visitorRedux ={
    reducer:  visitorReducer,
    actions,
    operations  
};

export default visitorRedux;