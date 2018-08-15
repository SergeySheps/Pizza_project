import {employeeTypes, userTypes} from '../actions/types'

export function cookedOrders(state = '', action) {
  switch (action.type) {
    case employeeTypes.ORDERS_COOKED_ORDERS_SUCCESS:
      return action.history
    case employeeTypes.ORDERS_COOKED_ORDERS_FAILURE:
      return []
    case employeeTypes.ORDERS_COOKED_ORDERS_CLEAR:
      return []
    case userTypes.USER_LOGOUT:
      return []
    default:
      return state
  }
}
