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
    case pizzaTypes.PIZZA_ADD_UPDATE_INGREDIENT: {
      return state.map(
        ingredient =>
          ingredient.name === action.ingredient.name
            ? {
                ...ingredient,
                amount: ingredient.amount + 1,
                price: ingredient.basePrice * (ingredient.amount + 1)
              }
            : ingredient
      )
    }
    case pizzaTypes.PIZZA_REFRESH_INGREDIENTS: {
      return state.map(addedIngredient => {
        const updatedBasePrice = action.ingredients.find(ingredient => ingredient.name === addedIngredient.name).price;
        return {
          ...addedIngredient,
          basePrice: updatedBasePrice,
          price : updatedBasePrice * addedIngredient.amount
        }
      })
    }
    case pizzaTypes.PIZZA_REDUCE_INGREDIENT: {
      return state.map(
        ingredient =>
          ingredient.name === action.ingredient.name
            ? {
                ...ingredient,
                amount: ingredient.amount > 0 ? ingredient.amount - 1 : ingredient.amount,
                price: ingredient.basePrice * (ingredient.amount > 0 ? ingredient.amount - 1 : ingredient.amount)
              }
            : ingredient
      )
    }
    case pizzaTypes.PIZZA_CLEAR:
      return []

    default:
      return state
  }
}
