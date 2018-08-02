import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {toastrNotification} from '../helpers/toastrHelper'
import {toastrNotificationData} from '../constants/constants'

class LoginPage extends Component {
  componentDidUpdate(prevProps, prevState) {
    const {hasLoginFailed, logout} = this.props
    
    if (hasLoginFailed) {
      toastrNotification('error', toastrNotificationData.loginError)
      logout()
    }
  }

  render() {
    const {login, isLoggedIn} = this.props

    if (isLoggedIn) {
      return <Redirect to="/main" />
    }

    return (
      <div className="login">
        <main className="login__content">
          <LoginForm onSubmit={values => login(values)} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {isLoggedIn, hasLoginFailed} = state.login

  return {
    isLoggedIn,
    hasLoginFailed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: values => dispatch(userActions.login(values)),
    logout: () => dispatch(userActions.logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
