import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import {query, add, del, revise,asyncquery,asyncAdd} from '../../action/userinfo/userAction'

function Login(props: any) {
    const [list, setlist] = useState([])
    const getAdd = () => {
        // let num = Math.round(Math.random() * 100)
      let num=props.data.length+1
        console.log(num)
        props.asyncAdd({id: num, msg: `学习redux技术${num}`, type: "react"}).then((res:any)=>{
            console.log(res,'===res')
            if(res.code===0){
                setlist(res.data)
            }
        })
        // setlist(props.data)
    }

    const del = (item: any) => {
        // console.log(item)
        props.del(item.id)
    }

    const rsvisel = (item: any) => {
      console.log(item,'修改')
    }

    useEffect(() => {

      props.asyncquery({})

        setlist(props.data)
    })
    return (
        <div>
            <button onClick={getAdd}>redux添加</button>
            {list.map((item: any, index: any) => {
                return <div key={index}>
                    {item.msg},
                    <a>{item.type}</a>
                    <a style={{
                      marginLeft: '10px',color:'red'
                    }} onClick={() => del(item)}>删除</a>
                    <a style={{
                        marginLeft: '10px',color:'burlywood'
                    }} onClick={() => rsvisel(item)}>修改</a>
                </div>
            })}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        data: state.userinfo.list
    }
}

const mapDispatchToProps = {
    query,
    add,
    del,
    revise,
    asyncquery,
    asyncAdd
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
