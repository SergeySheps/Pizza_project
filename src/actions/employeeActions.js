import {employeeTypes} from './types'
import {employeeService} from '../services/employeeService'

export const employeeActions = {
  getOrdersQueue,
  saveOrderAcceptor,
  getOrdersInProgress,
  saveReadyOrder,
  deleteOrderFromQueue,
  getCookedOrdersHistory,
  saveStartTime,
  saveFinishTime,
  getStartTime,
  getDayReport,
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
    employeeService.saveOrderAcceptor(acceptorData)
  }
}

function deleteOrderFromQueue(orderData) {
  return dispatch => {
    employeeService.deleteOrderFromQueue(orderData).then(deletedOrder => {
      dispatch(deleteOrderFromQueueSuccess(deletedOrder))
    })
  }

  function deleteOrderFromQueueSuccess(deletedOrder) {
    return {
      type: employeeTypes.ORDERS_DELETED_ORDER_SUCCESS,
      deletedOrder
    }
  }
}

function saveReadyOrder(orderData) {
  return dispatch => {
    employeeService.saveReadyOrder(orderData)
  }
}

function getOrdersInProgress(email) {
  return dispatch => {
    employeeService.getOrdersInProgress(email).then(orders => {
      dispatch(getOrdersInProgress(orders))
    })
  }

  function getOrdersInProgress(orders) {
    return {
      type: employeeTypes.ORDERS_ACTIVE_ORDERS_SUCCESS,
      orders
    }
  }
}

function saveStartTime(timeData) {
  return dispatch => {
    employeeService.saveStartTime(timeData)
  }
}

function saveFinishTime(timeData) {
  return dispatch => {
    employeeService.saveFinishTime(timeData).then(time => {
      dispatch(getStartTimeSuccess(time))
    })
  }

  function getStartTimeSuccess(time) {
    return {
      type: employeeTypes.TIME_START_SUCCESS,
      time
    }
  }
}

function getStartTime(email) {
  return dispatch => {
    employeeService.getStartTime(email).then(
      time => {
        dispatch(getStartTimeSuccess(time))
      },
      error => {
        dispatch(getStartTimeFailure())
      }
    )
  }

  function getStartTimeSuccess(time) {
    return {
      type: employeeTypes.TIME_START_SUCCESS,
      time
    }
  }

  function getStartTimeFailure() {
    return {
      type: employeeTypes.TIME_START_FAILURE
    }
  }
}

function getDayReport(email) {
  return dispatch => {
    employeeService.getDayReport(email).then(
      report => {
        dispatch(getDayReportSuccess(report))
      },
      error => {
        dispatch(getDayReportFailure())
      }
    )
  }

  function getDayReportSuccess(report) {
    return {
      type: employeeTypes.REPORT_GET_SUCCESS,
      report
    }
  }

  function getDayReportFailure() {
    return {
      type: employeeTypes.REPORT_GET_FAILURE
    }
  }
}

function clear() {
  return {
    type: employeeTypes.ORDERS_ACTIVE_ORDERS_CLEAR
  }
}
