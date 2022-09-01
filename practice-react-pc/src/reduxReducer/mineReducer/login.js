import mineActionType from "../../action/Mine/mineActionType";
const userList=[]
 const add=(state=userList,action)=>{
    switch (action.type){
        case mineActionType.ADD_Login:
            return {userList: [...state,action.payload]}
        default:
            return state;
    }
}

export default add;