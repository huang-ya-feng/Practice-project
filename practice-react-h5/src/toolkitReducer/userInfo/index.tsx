import { createSlice } from '@reduxjs/toolkit'
import userModel from '../../models/user/index'

let userSlice = createSlice({
    name: "userinfo",
    initialState: {
        user: [],
    },
    reducers: {
        queryUser: (state, action) => {
            console.log(action,'action-redux');
            
            return { user: action.payload }
        },
        addUser: (state, action) => {
            return { user: state.user.concat(action.payload) }
        }
    },
})

const { queryUser, addUser } = userSlice.actions

const asyncQuery = (payload: any) => {
    return async (dispatch: any) => {

        let { data } = await userModel.query(payload)
        dispatch(queryUser(data))
    }
}

const asyncAdduser = (payload: any) => {
    return async (dispatch: any) => {
        // dispatch(addUser(payload))
        let { data } = await userModel.add(payload)
        console.log(data);
        if (data) {
            dispatch(addUser(data))
        }

    }
}

export { asyncQuery, asyncAdduser }

export default userSlice