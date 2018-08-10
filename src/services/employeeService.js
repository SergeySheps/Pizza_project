import api from '../api/api'
import {routs} from '../constants/constants'

export const employeeService = {
  getOrdersQueue,
  saveOrderAcceptor,
  getOrdersInProgress
}

function getOrdersQueue() {
  return api.getRequestWithToken(routs.cook)
}

function saveOrderAcceptor(acceptorData) {
  return api.putRequestWithToken(routs.cook,acceptorData)
}

function getOrdersInProgress(email) {
  return api.postRequestWithToken(routs.cook,{email})
}
