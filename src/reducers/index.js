import {combineReducers} from 'redux'
import {userTypes} from '../actions/types'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {login} from './login'
import {pizza} from './pizza'
import {basket} from './basket'
import {cookedOrders} from './cookedOrders'
import {order} from './order'
import {timeJournal} from './timeJournal'
import {ordersHistory} from './ordersHistory'
import {ordersQueue} from './ordersQueue'
import {addedIngredients} from './addedIngredients'
import {registration} from './registration'
import {activeOrders} from './activeOrders'

const appReducer = combineReducers({
  login,
  addedIngredients,
  registration,
  pizza,
  form: formReducer,
  basket,
  order,
  ordersHistory,
  ordersQueue,
  activeOrders,
  cookedOrders,
  timeJournal,
  toastr: toastrReducer
})

const rootReducer = (state, action) => {
  if (action.type === userTypes.USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
