import {userTypes} from '../actions/types'

export function ordersHistory(state = "", action) {
  switch (action.type) {
    case userTypes.ORDERS_HISTORY_SUCCESS:
      return action.history
    case userTypes.ORDERS_HISTORY_FAILURE:
      return []
    default:
      return state
  }
}
