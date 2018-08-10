import api from '../api/api'
import {routs} from '../constants/constants'

export const employeeService = {
  getOrdersQueue
}

function getOrdersQueue() {
  return api.getRequestWithToken(routs.cook)
}
