import { pizzaConstants } from './types'

export const pizzaActions = {
    addIngredient,
    reduceIngredient,
    createPizzaPrice,
    updateIngredients,
}

function createPizzaPrice(pizzaData) {
    return { type: pizzaConstants.PIZZA_CREATE_PRICE, pizzaData };
}

function addIngredient(ingredient){
    return {
        type: pizzaConstants.PIZZA_ADD_INGREDIENT,
        ingredient
    }
}
function reduceIngredient(ingredient){
    return {
        type: pizzaConstants.PIZZA_REDUCE_INGREDIENT,
        ingredient
    }
}
function updateIngredients(ingredients){
    return {
        type: pizzaConstants.PIZZA_UPDATE_INGREDIENTS,
        ingredients
    }
}