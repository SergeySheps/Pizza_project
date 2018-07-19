import { combineReducers } from 'redux'
import {registration} from './registration'
import {login} from './login'
import {alert} from './alert'
import {pizza} from './pizza'




export default combineReducers({
  registration,
  login,
  alert,
  pizza
})
