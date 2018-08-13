import {employeeTypes} from './types'
import {employeeService} from '../services/employeeService'

export const employeeActions = {
  getOrdersQueue,
  saveOrderAcceptor,
  getOrdersInProgress,
  saveReadyOrder,
  deleteOrderFromQueue,
  getCookedOrdersHistory,
  clear
}

function getOrdersQueue() {
  return dispatch => {
    employeeService.getOrdersQueue().then(
      queue => {
        dispatch(getOrdersQueueSuccess(queue))
      },
      error => {
        dispatch(getOrdersQueueFailure())
      }
    )
  }

  function getOrdersQueueSuccess(queue) {
    return {
      type: employeeTypes.ORDERS_QUEUE_SUCCESS,
      queue
    }
  }

  function getOrdersQueueFailure() {
    return {
      type: employeeTypes.ORDERS_QUEUE_FAILURE
    }
  }
}

function getCookedOrdersHistory(email) {
  return dispatch => {
    employeeService.getCookedOrdersHistory(email).then(
      history => {
        dispatch(getCookedOrdersHistorySuccess(history))
      },
      error => {
        dispatch(getCookedOrdersHistoryFailure())
      }
    )
  }

  function getCookedOrdersHistorySuccess(history) {
    return {
      type: employeeTypes.ORDERS_COOKED_ORDERS_SUCCESS,
      history
    }
  }

  function getCookedOrdersHistoryFailure() {
    return {
      type: employeeTypes.ORDERS_COOKED_ORDERS_FAILURE
    }
  }
}

function saveOrderAcceptor(acceptorData) {
  return dispatch => {
    employeeService.saveOrderAcceptor(acceptorData).then(
      queue => {
        // dispatch(getOrdersQueueSuccess(queue))
      },
      error => {
        // dispatch(getOrdersQueueFailure())
      }
    )
  }

  // function getOrdersQueueSuccess(queue) {
  //   return {
  //     type: employeeTypes.ORDERS_QUEUE_SUCCESS,
  //     queue
  //   }
  // }

  // function getOrdersQueueFailure() {
  //   return {
  //     type: employeeTypes.ORDERS_QUEUE_FAILURE
  //   }
  // }
}

function deleteOrderFromQueue(orderData) {
  return dispatch => {
    employeeService.deleteOrderFromQueue(orderData).then(
      deletedOrder => {
        dispatch(deleteOrderFromQueueSuccess(deletedOrder))
      },
      error => {
        // dispatch(getOrdersQueueFailure())
      }
    )
  }

  function deleteOrderFromQueueSuccess(deletedOrder) {
    return {
      type: employeeTypes.ORDERS_DELETED_ORDER_SUCCESS,
      deletedOrder
    }
  }

  // function getOrdersQueueFailure() {
  //   return {
  //     type: employeeTypes.ORDERS_QUEUE_FAILURE
  //   }
  // }
}

function saveReadyOrder(orderData) {
  return dispatch => {
    employeeService.saveReadyOrder(orderData).then(
      queue => {
        // dispatch(getOrdersQueueSuccess(queue))
      },
      error => {
        // dispatch(getOrdersQueueFailure())
      }
    )
  }

  // function getOrdersQueueSuccess(queue) {
  //   return {
  //     type: employeeTypes.ORDERS_QUEUE_SUCCESS,
  //     queue
  //   }
  // }

  // function getOrdersQueueFailure() {
  //   return {
  //     type: employeeTypes.ORDERS_QUEUE_FAILURE
  //   }
  // }
}

function getOrdersInProgress(email) {
  return dispatch => {
    employeeService.getOrdersInProgress(email).then(
      orders => {
        dispatch(getOrdersInProgress(orders))
      },
      error => {
        // dispatch(getOrdersQueueFailure())
      }
    )
  }

  function getOrdersInProgress(orders) {
    return {
      type: employeeTypes.ORDERS_ACTIVE_ORDERS_SUCCESS,
      orders
    }
  }

  // function getOrdersQueueFailure() {
  //   return {
  //     type: employeeTypes.ORDERS_QUEUE_FAILURE
  //   }
  // }
}

function clear() {
  return {
    type: employeeTypes.ORDERS_ACTIVE_ORDERS_CLEAR
  }
}
