import React, {useEffect, useRef} from 'react';
import Login1 from "./login1";

function Login(props:any) {

    useEffect(()=>{

    },[])
    return (
        <div>
           <h2>父组件</h2>
            <br/>
            <Login1/>
        </div>
    );
}

export default Login;