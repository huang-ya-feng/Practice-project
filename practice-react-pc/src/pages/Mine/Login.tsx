import React from 'react'
import { connect } from 'react-redux'

export const Login = (props:any) => {
  return (
    <div>Login</div>
  )
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)