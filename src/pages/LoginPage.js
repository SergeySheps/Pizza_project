import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {toastr} from 'react-redux-toastr'

class LoginPage extends Component {
  componentDidUpdate(prevProps, prevState) {
    const {isFailLogin, logout} = this.props

    if (isFailLogin) {
      toastr.error('Sign-In error', 'For some reason the sign-in was failed, please try again')
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
  const {isLoggedIn, isFailLogin} = state.login

  return {
    isLoggedIn,
    isFailLogin
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
