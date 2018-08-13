import api from '../api/api'
import {routs} from '../constants/constants'

export const employeeService = {
  getOrdersQueue,
  saveOrderAcceptor,
  getOrdersInProgress,
  saveReadyOrder,
  getCookedOrdersHistory,
  deleteOrderFromQueue
}

function getOrdersQueue() {
  return api.getRequestWithToken(routs.cook)
}

function saveOrderAcceptor(acceptorData) {
  return api.putRequestWithToken(routs.cook, acceptorData)
}

function getOrdersInProgress(email) {
  return api.postRequestWithToken(routs.cook, {email})
}

function saveReadyOrder(orderData) {
  return api.postRequestWithToken(routs.cook + `?isSaveReadyOrder=true`, orderData)
}

function deleteOrderFromQueue(orderData) {
  return api.deleteRequestWithToken(routs.cook, orderData)
}

function getCookedOrdersHistory(email) {
  console.log(email,"qwe")
  return api.postRequestWithToken(routs.cookHistory, {email})
}
