import {pizzaTypes} from '../actions/types'

export function ingredients(state = [], action) {
  switch (action.type) {
    case pizzaTypes.PIZZA_ADD_INGREDIENT: {
      const duplicateState = state.map(x => ({...x}))
      const ingredient = duplicateState.find(el => el.name === action.ingredient.name)
      if (ingredient) {
        ingredient.amount++
        ingredient.price = ingredient.basePrice * ingredient.amount
        return duplicateState
      } else {
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
    }
    case pizzaTypes.PIZZA_REFRESH_INGREDIENTS: {
      const duplicateState = state.map(x => ({...x}))
      return duplicateState.map(el => {
        el.basePrice = action.ingredients.find(ingred => ingred.name === el.name).price
        el.price = el.basePrice * el.amount
        return el
      })
    }
    case pizzaTypes.PIZZA_REDUCE_INGREDIENT: {
      return state.map(
        ingredient =>
          ingredient.name === action.ingredient.name
            ? {
                ...ingredient,
                amount: ingredient.amount > 0 ? --ingredient.amount : ingredient.amount,
                price: ingredient.basePrice * ingredient.amount
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
