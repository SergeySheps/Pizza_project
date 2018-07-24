import { pizzaConstants } from '../actions/types';
import { basePizzaPrice } from '../constants/constants';
import { ingredients } from '../static/ingredientsData';

export function pizza(state = {}, action) {
  switch (action.type) {
    case pizzaConstants.PIZZA_CREATE:
      return {};
    // case pizzaConstants.PIZZA_CREATE_YOURSELF:
    //   return {
    //     isCreateYourself: true,

    //   };
    case pizzaConstants.PIZZA_CREATE_PRICE:
      return pizzaSize(action);
    
    default:
      return state
  }
}

function pizzaSize({ pizzaData }) {
  switch (pizzaData.pizza_size.toString()) {
    case "22":
      return {
        isCreateYourself: true,
        disable: true,
        prices: {
          ingredients: ingredients.map(ingredient => {
            const newPriceIngredient = Object.assign({}, ingredient);
            newPriceIngredient.price -= 0.5;
            return newPriceIngredient;
          }),
          basePizzaPrice: basePizzaPrice["22"]
        }

      };
    case "30":
      return {
        isCreateYourself: true,
        disable: true,
        prices: {
          ingredients: ingredients,
          basePizzaPrice: basePizzaPrice["30"]
        }
      };
    case "36":
      return {
        isCreateYourself: true,
        disable: true,
        prices: {
          ingredients: ingredients.map(ingredient => {
            const newPriceIngredient = Object.assign({}, ingredient);
            newPriceIngredient.price += 0.5;
            return newPriceIngredient;
          }),
          basePizzaPrice: basePizzaPrice["36"]
        }
      };
  }
}