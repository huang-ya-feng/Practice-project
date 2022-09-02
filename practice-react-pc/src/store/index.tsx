import {configureStore, combineReducers} from '@reduxjs/toolkit'
import mine from "../toolkitReducer/mine";
let allReducer=combineReducers({
    userinfo:mine.reducer,
})
const store=configureStore({
    reducer:allReducer
})

export default  store