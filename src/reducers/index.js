import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {login} from './login'
import {registration} from './registration'

export default combineReducers({
  login,
  registration,
  form: formReducer,
  toastr: toastrReducer
})
