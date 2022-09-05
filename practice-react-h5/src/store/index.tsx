import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from '../toolkitReducer/userInfo/index'
let allReducer = combineReducers({
    userSlice: userSlice.reducer
})

export default configureStore({
    reducer: allReducer
}) 