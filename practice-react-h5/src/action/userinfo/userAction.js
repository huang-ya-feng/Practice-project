import useraType from "./useraType";
import userModel from '../../models/user'
const query=(payload)=>{
    return {
        type:useraType.QUERY,
        payload
    }
}

const asyncquery=(payload)=>{
    return async (dispatch)=>{
        let {data}=await userModel.query(payload);
        console.log(data,'data-server')
        if(!data.length){
            dispatch(query(data))
        }

    }
}

const add=(payload)=>{
    return {
        type:useraType.ADD,
        payload
    }
}

const asyncAdd=(payload)=>{
    return (dispatch)=>{
        return new Promise(async (resolve, reject)=>{
            let {data}=await userModel.add(payload);
            if(data.length){
                dispatch(add(data))
                resolve({
                    code:0,
                    msg:"新增成功",
                    data
                })
            }else {
                resolve({
                    code:1,
                    msg:"新增失败"
                })
            }
        })
    }

}

const del=(payload)=>{
    return {
        type:useraType.DEL,
        payload
    }
}

const revise=(payload)=>{
    console.log(payload,'payload')
    return {
        type:useraType.REVISE,
        payload,
    }
}

export {query,add,del,revise,asyncquery,asyncAdd};