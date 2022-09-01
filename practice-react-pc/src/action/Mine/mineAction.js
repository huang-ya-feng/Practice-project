import mineActionType from "./mineActionType";
const add=(username,userpwd)=>{
    return {
        type:mineActionType.ADD_Login,
        payload:{username,userpwd}
    }
}
export {add};