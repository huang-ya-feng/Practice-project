import React, { useEffect } from 'react'
import { connect } from 'react-redux'

export const Login = (props: any) => {
  useEffect(() => {
    console.log(props, 'toolkit数据')
  }, [])
  return (
    <div>Login</div>
  )
}

const mapStateToProps = (state: any) => {
  // console.log(state,'sta')
  return {
    // ...state,
    list: state.userSlice.user
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)