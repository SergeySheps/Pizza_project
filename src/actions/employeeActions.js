import {employeeTypes} from './types'
import {employeeService} from '../services/employeeService'

export const employeeActions = {
  getOrdersQueue,
  saveOrderAcceptor,
  getOrdersInProgress,
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
