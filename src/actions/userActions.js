import {userTypes} from './types'
import {userService} from '../services/userServices/userService'

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
        dispatch(success(user))
      },
      error => {
        dispatch(failure({error}))
      }
    )
  }

  function success(user) {
    return {
      type: userTypes.LOGIN_SUCCESS,
      user
    }
  }

  function failure(error) {
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
        console.log('reg+')
        dispatch(success(user))
      },
      error => {
        console.log('reg-')
        dispatch(failure(error.toString()))
      }
    )
  }

  function success(user) {
    return {
      type: userTypes.REGISTER_SUCCESS,
      user
    }
  }

  function failure(error) {
    return {
      type: userTypes.REGISTER_FAILURE,
      error
    }
  }
}
