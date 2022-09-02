import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { asyncAdd } from '../../toolkitReducer/mine'
function Index(props: any) {
    // const {}=useSelector(state=>state)
    useEffect(() => {
        console.log('home页面的props', props);

    }, [])
    const getbtn = () => {
        // console.log('home页面的props', props);
        // console.log(props.asyncAdd({id:12,msg:'1231313'}));
        let arr = { id: 2, msg: "toolkit", type: "react" }
        props.asyncAdd(arr)

        console.log(props, '修改后的数据');



    }
    return (
        <div>
            Home
            <button onClick={getbtn}>props</button>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    userList: state.userinfo.userList //将初始的数据映射到props中
})

const mapDispatchToProps = {
    asyncAdd
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);