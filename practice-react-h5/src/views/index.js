
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { asyncQuery } from '../toolkitReducer/userInfo'
export const Index = (props) => {
    useEffect(() => {
        console.log(props, 'props');

    })
    return (
        <div>props</div>
    )
}

const mapStateToProps = (state) => ({
    list:state.userSlice.user
})

const mapDispatchToProps = {
    asyncQuery
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)