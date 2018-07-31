import {pizzaTypes} from '../actions/types'
import {basePizzaPrice, coefficientPrice, pizzaIndexeSizes, pizzaSizes} from '../constants/constants'
import {getLocalStorageItem} from '../helpers/authorizationHelper'

export function pizza(state = [], action) {
  switch (action.type) {
    case pizzaTypes.PIZZA_GET_PRODUCTS_SUCCESS:
      return {
        basePizzaPrice: basePizzaPrice[pizzaSizes.small],
        products: action.products.map(product => {
          const newPriceIngredient = Object.assign({}, product)
          newPriceIngredient.price -= coefficientPrice
          return newPriceIngredient
        })
      }
    case pizzaTypes.PIZZA_GET_PRODUCTS_FAILURE:
      return {
        hasGetProductsFailed: true
      }
    case pizzaTypes.PIZZA_CREATE_PRICE_FROM_SIZE:
      return {
        basePizzaPrice: basePizzaPrice[pizzaIndexeSizes[action.nextIndexSize]],
        products: action.products.map(product => {
          const newPriceIngredient = Object.assign({}, product)
          const coefficientDifferencePrice = Math.abs(action.nextIndexSize - action.currentIndexSize)
          if (action.nextIndexSize > action.currentIndexSize) {
            newPriceIngredient.price += coefficientDifferencePrice * coefficientPrice
          } else {
            newPriceIngredient.price -= coefficientDifferencePrice * coefficientPrice
          }
          return newPriceIngredient
        })
      }

    case pizzaTypes.PIZZA_CLEAR:
      return {}
    default:
      return state
  }
}
