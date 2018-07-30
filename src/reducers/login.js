import {userTypes} from '../actions/types'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? {isLoggedIn: true, ...user} : {}

export function login(state = initialState, action) {
  switch (action.type) {
    case userTypes.LOGIN_REQUEST:
      return {
        hasToken: !!localStorage.getItem('token'),
        user: action.user
      }
    case userTypes.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      }
    case userTypes.LOGIN_FAILURE:
      return {
        isLoggedIn: false,
        hasLoginFailed: true
      }
    case userTypes.LOGOUT:
      return {}
    default:
      return state
  }
}
