import React from 'react'
import { connect } from 'react-redux'

export const Home = (props) => {
  return (
    <div>index</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)