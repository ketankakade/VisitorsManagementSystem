import {combineReducers} from 'redux';
import {vmsDetailsReducer } from './components/js/duck/reducers';
import {visitorReducer} from './components/js/VII/duck/reducers';

const reducerObj ={
    vmsDetailsReducer,
    visitorReducer
}
export const rootReducer = combineReducers(reducerObj);