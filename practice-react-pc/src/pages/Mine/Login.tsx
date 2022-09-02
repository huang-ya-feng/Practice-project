import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {asyncAdd} from "../../toolkitReducer/mine";

export const Login = (props:any) => {
  const [list,setlist]=useState([])
  useEffect(()=>{
    console.log('页面加载完成',props.userList)
    console.log(props.asyncAdd([{id:'2',msg:"1",type:'react'}]))
  },[])
  return (
    <div>Login</div>
  )
}

const mapStateToProps = (state:any) => ({
  userList: state.userInfo.userList //将初始的数据映射到props中
})

const mapDispatchToProps = {
  asyncAdd
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)