import {userTypes} from './types'
import {userService} from '../services/userService'

export const userActions = {
  login,
  register,
  registerClear,
  logout,
  checkExistingToken
}

function login({email, password}) {
  return dispatch => {
    userService.login(email, password).then(
      user => {
        dispatch(loginSuccess(user))
      },
      error => {
        dispatch(loginFailure({error}))
      }
    )
  }

  function loginSuccess(user) {
    return {
      type: userTypes.LOGIN_SUCCESS,
      user
    }
  }

  function loginFailure(error) {
    return {
      type: userTypes.LOGIN_FAILURE,
      error
    }
  }
}

function logout() {
  userService.logout()
  return {
    type: userTypes.LOGOUT
  }
}

function checkExistingToken() {
  return {
    type: userTypes.LOGIN_REQUEST
  }
}

function registerClear() {
  return {
    type: userTypes.REGISTER_CLEAR
  }
}

function register(user) {
  return dispatch => {
    userService.register(user).then(
      user => {
        dispatch(registerSuccess(user))
      },
      error => {
        dispatch(registerFailure(error.toString()))
      }
    )
  }

  function registerSuccess(user) {
    return {
      type: userTypes.REGISTER_SUCCESS,
      user
    }
  }

  function registerFailure(error) {
    return {
      type: userTypes.REGISTER_FAILURE,
      error
    }
  }
}
