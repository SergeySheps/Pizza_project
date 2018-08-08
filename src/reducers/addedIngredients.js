import {pizzaTypes} from '../actions/types'

export function addedIngredients(state = [], action) {
  switch (action.type) {
    case pizzaTypes.PIZZA_ADD_INGREDIENT: {
      return [
        ...state,
        {
          name: action.ingredient.name,
          basePrice: action.ingredient.price,
          price: action.ingredient.price,
          amount: 1
        }
      ]
    }
    case pizzaTypes.PIZZA_REFRESH_INGREDIENTS: {
      return action.ingredients 
    }
    case pizzaTypes.PIZZA_CLEAR:
      return []

    default:
      return state
  }
}
