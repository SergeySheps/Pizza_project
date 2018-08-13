import {employeeTypes} from '../actions/types'

export function activeOrders(state = '', action) {
  switch (action.type) {
    case employeeTypes.ORDERS_ACTIVE_ORDERS_SUCCESS:
      return action.orders
    case employeeTypes.ORDERS_DELETED_ORDER_SUCCESS:
      return state.filter(order => order.id !== action.deletedOrder.id)
    case employeeTypes.ORDERS_ACTIVE_ORDERS_FAILURE:
      return []
    case employeeTypes.ORDERS_ACTIVE_ORDERS_CLEAR:
      return []
    default:
      return state
  }
}
