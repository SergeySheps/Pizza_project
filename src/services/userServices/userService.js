import api from '../../api/api'
import {routs} from '../../constants/constants'

export const userService = {
  login,
  register,
  checkEqualEmail,
  logout
}

function login(email, password) {
  return api.postRequestWithoutToken(routs.login, {email, password}).then(
    user => {
      const {token, ...userData} = user
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(userData))
      return userData
    },
    error => {
      return Promise.reject(error)
    }
  )
}

function logout() {
  localStorage.clear();
}

function register(user) {
  return api.postRequestWithoutToken(routs.registration, user)
}

function checkEqualEmail({email}) {
  return api.postRequestWithoutToken(routs.checkEqualEmail, {email})
}
