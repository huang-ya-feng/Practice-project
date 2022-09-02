import { createSlice } from '@reduxjs/toolkit'

let userSlice = createSlice({
    name: 'userinfo',
    initialState: {
        userList: [],
    },
    reducers: {
        add: (state: any, action: any) => {
            return { userList: state.userList.concat(action.payload) }
        }
    },
})
const { add } = userSlice.actions

const asyncAdd = (payload: any) => {
    return (dispatch: any) => {
        dispatch(add(payload))

    }
}




export { asyncAdd };
export default userSlice;