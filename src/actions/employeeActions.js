import {employeeTypes} from './types'
import {employeeService} from '../services/employeeService'

export const employeeActions = {
  getOrdersQueue
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
