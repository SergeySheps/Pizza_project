import React, {Component} from 'react'
import Header from '../components/header/Header'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class MainPage extends Component {
  render() {
    const {isLoggedIn, logout} = this.props

    if (!isLoggedIn) {
      return <Redirect to="/" />
    }

    if (!localStorage.getItem('token')) {
      logout()
      return <Redirect to="/login" />
    }

    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
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
