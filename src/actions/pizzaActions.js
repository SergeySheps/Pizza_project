import {pizzaTypes} from './types'
import {pizzaService} from '../services/pizzaService'

export const pizzaActions = {
  getProductsFromDB,
  createPriceFromSize,
  addIngredient,
  reduceIngredient,
  refreshIngredients,
  clear
}

function getProductsFromDB() {
  return dispatch => {
    pizzaService.getProductsFromDB().then(
      products => {
        dispatch(getProductsSuccess(products))
      },
      error => {
        dispatch(getProductsFailure())
      }
    )
  }

  function getProductsSuccess(products) {
    return {
      type: pizzaTypes.PIZZA_GET_PRODUCTS_SUCCESS,
      products
    }
  }

  function getProductsFailure() {
    return {
      type: pizzaTypes.PIZZA_GET_PRODUCTS_FAILURE
    }
  }
}

function createPriceFromSize(products, currentIndexSize, nextIndexSize) {
  return {
    type: pizzaTypes.PIZZA_CREATE_PRICE_FROM_SIZE,
    products,
    currentIndexSize,
    nextIndexSize
  }
}

function addIngredient(ingredient) {
  return {
    type: pizzaTypes.PIZZA_ADD_INGREDIENT,
    ingredient
  }
}

function reduceIngredient(ingredient) {
  return {
    type: pizzaTypes.PIZZA_REDUCE_INGREDIENT,
    ingredient
  }
}

function refreshIngredients(ingredients) {
  return {
    type: pizzaTypes.PIZZA_REFRESH_INGREDIENTS,
    ingredients
  }
}

function clear() {
  return {
    type: pizzaTypes.PIZZA_CLEAR
  }
}
