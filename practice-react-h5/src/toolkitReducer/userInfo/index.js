import { createSlice } from '@reduxjs/toolkit'


let userSlice = createSlice({
    name: "userinfo",
    initialState: {
        user: [],
    },
    reducers: {
        queryUser: (state, action) => {
            return { user: action.payload }
        }
    },
})

const { queryUser } = userSlice.actions

const asyncQuery = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(queryUser(payload))
        }, 5000);
    }
}

export { asyncQuery }

export default userSlice