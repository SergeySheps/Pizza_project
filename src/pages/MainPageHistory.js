import React, {Component} from 'react'
import Header from '../components/header/Header'
import Main from '../components/main/main_MainPage/Main'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import ModalHistory from '../components/modals/ModalHistory'
import {getLocalStorageItem} from '../helpers/authorizationHelper'

class MainPage extends Component {
  render() {
    return <ModalHistory />
  }
}

export default connect()(MainPage)
