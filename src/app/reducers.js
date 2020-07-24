import {combineReducers} from 'redux';
import {vmsDetailsReducer } from './components/js/duck/reducers';

const reducerObj ={
    vmsDetailsReducer,
}
export const rootReducer = combineReducers(reducerObj);