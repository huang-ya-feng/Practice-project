import useraType from "../../action/userinfo/useraType";

const user = {
    list: [
        // {id: 1, msg: "学习redux技术1", type: 'react'},
    ]
}
const userinfo = (state = user, action: any) => {
    switch (action.type) {
        case useraType.QUERY://查询
            return {
                // ...state,
                list: action.payload,
            }
        case useraType.ADD://添加
            return {
                list: [...state.list, action.payload]
            }

        case useraType.DEL://删除
            return {
                list: state.list.filter((item: any) => item.id !== action.payload)
            }

        case useraType.REVISE://修改
            let newArr = state.list
            // console.log(newArr,'state的数据')
            const data=newArr.map((item:any)=>{
                console.log(item.id,'item')
                console.log(action.payload,'actione')
                // if(item.id===action.payload.id){
                //     Object.assign(item,action.payload)
                // }
            })
            console.log(data)
            return {}
        // return {
        //
        // }

        default:
            return state

    }
}

export default userinfo;