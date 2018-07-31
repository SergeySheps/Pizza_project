import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {login} from './login'
import {pizza} from './pizza'
import {ingredients} from './ingredients'
import {registration} from './registration'

export default combineReducers({
  login,
  ingredients,
  registration,
  pizza,
  form: formReducer,
  toastr: toastrReducer
})
