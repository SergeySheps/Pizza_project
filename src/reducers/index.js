import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {login} from './login'
import {pizza} from './pizza'
import {addedIngredients} from './addedIngredients'
import {registration} from './registration'

export default combineReducers({
  login,
  addedIngredients,
  registration,
  pizza,
  form: formReducer,
  toastr: toastrReducer
})
