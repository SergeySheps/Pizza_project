import {pizzaTypes} from '../actions/types'

export function basket(state = [], action) {
  switch (action.type) {
    case pizzaTypes.BASKET_ADD_ITEM:
      return [...state, action.item]
    case pizzaTypes.BASKET_INCREMENT_PIZZA_AMOUNT:
      return action.updatedBasket
    default:
      return state
  }
}
