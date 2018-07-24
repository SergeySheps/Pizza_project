import { combineReducers } from 'redux'
import {registration} from './registration'
import {login} from './login'
import {alert} from './alert'
import {pizza} from './pizza'
import {ingredients} from './ingredients'





export default combineReducers({
  registration,
  login,
  alert,
  pizza,
  ingredients
})
