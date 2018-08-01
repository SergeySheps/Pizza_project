import React, {Component} from 'react'
import Header from '../components/header/Header'
import Main from '../components/main/main_MainPage/Main'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getLocalStorageItem} from '../helpers/authorizationHelper'

class MainPage extends Component {
  state = {
    hasToken: true
  }

  handleCheckToken = () => {
    if (!getLocalStorageItem('token')) {
      this.setState({
        hasToken: false
      })
    }
  }
  
  render() {
    const {isLoggedIn, logout} = this.props

    if (!isLoggedIn) {
      return <Redirect to="/" />
    }

    if (!getLocalStorageItem('token')) {
      logout()
      return <Redirect to="/login" />
    }

    return (
      <div className="wrapperCheckToken" onClick={this.handleCheckToken}>
        <Header />
        <Main />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {isLoggedIn, hasToken} = state.login
  return {
    isLoggedIn,
    hasToken
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(userActions.logout()),
    checkExistingToken: () => dispatch(userActions.checkExistingToken())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
