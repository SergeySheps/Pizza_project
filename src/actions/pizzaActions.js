import { pizzaConstants } from '../constants/pizzaConstants'

export const pizzaActions = {
    createPizza,
}
function createPizza() {
    return { type: pizzaConstants.PIZZA_CREATE_YOURSELF };
}
