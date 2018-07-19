import { pizzaConstants } from '../constants/pizzaConstants';

export function pizza(state = {}, action) {
  switch (action.type) {
    case pizzaConstants.PIZZA_CREATE:
      return { };
    case pizzaConstants.PIZZA_CREATE_YOURSELF:
      return {
        isCreateYourself : true,
      };
    default:
      return state
  }
}