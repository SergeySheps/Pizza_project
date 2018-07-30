import React from 'react'
import {connect} from 'react-redux'
import HeaderNavigationBar from './HeaderNavigationBar'
import '../../styles/header.css'

const Header = props => {
  return (
    <header>
      <HeaderNavigationBar />
    </header>
  )
}

export default connect()(Header)
