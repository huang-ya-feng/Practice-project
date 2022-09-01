import {createStore,combineReducers} from 'redux'
import Login from '../reduxReducer/mineReducer/login'
let allReducer={
    list:Login
}

let rootReducer=combineReducers(allReducer);
const store=createStore(rootReducer);
export default store;