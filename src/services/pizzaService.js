import api from '../api/api'
import {routs} from '../constants/constants'

export const pizzaService = {
  getProductsFromDB
}

function getProductsFromDB() {
  return api.getRequestWithToken(routs.main)
}
