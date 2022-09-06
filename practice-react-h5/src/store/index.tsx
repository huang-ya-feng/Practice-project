import {combineReducers,createStore,applyMiddleware} from 'redux'
import userReducer from '../reduxReducer/userinfo'
import thunk from "redux-thunk";
const allReducer={
    userinfo:userReducer,
}
const rootReducer=combineReducers(allReducer)
const store=createStore(rootReducer,applyMiddleware(thunk))
export default store