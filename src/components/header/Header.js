import React from 'react'
import {connect} from 'react-redux'
import MyMenu from './Menu'
import '../../styles/header.css'

const Header = props => {
  return (
    <header>
      <MyMenu />
    </header>
  )
}

export default connect()(Header)
