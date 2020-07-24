import {vmsDetailsReducer} from './reducers';
import {operations} from './operations';
import {actions} from './actions';

const detailsRedux ={
    reducer:  vmsDetailsReducer,
    actions,
    operations  
};

export default detailsRedux;