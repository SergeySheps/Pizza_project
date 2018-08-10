export const userTypes = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  REGISTER_CLEAR: 'REGISTER_CLEAR',

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  ORDER_SUCCESS: 'ORDER_SUCCESS',
  ORDER_FAILURE: 'ORDER_FAILURE',

  ORDERS_HISTORY_SUCCESS: 'ORDERS_HISTORY_SUCCESS',
  ORDERS_HISTORY_FAILURE: 'ORDERS_HISTORY_FAILURE',
  ORDERS_HISTORY_UPDATE: 'ORDERS_HISTORY_UPDATE',
  ORDERS_HISTORY_ADD: 'ORDERS_HISTORY_ADD',

  LOGOUT: 'LOGOUT'
}

export const employeeTypes = {
  ORDERS_QUEUE_SUCCESS: 'ORDERS_QUEUE_SUCCESS',
  ORDERS_QUEUE_FAILURE: 'ORDERS_QUEUE_FAILURE',

  ORDERS_ACTIVE_ORDERS_SUCCESS: 'ORDERS_ACTIVE_ORDERS_SUCCESS',
  ORDERS_ACTIVE_ORDERS_FAILURE: 'ORDERS_ACTIVE_ORDERS_FAILURE',
  ORDERS_ACTIVE_ORDERS_CLEAR: 'ORDERS_ACTIVE_ORDERS_CLEAR'
}

export const pizzaTypes = {
  PIZZA_GET_PRODUCTS_SUCCESS: 'PIZZA_GET_PRODUCTS_SUCCESS',
  PIZZA_GET_PRODUCTS_FAILURE: 'PIZZA_GET_PRODUCTS_FAILURE',
  PIZZA_GET_PIZZAS_SUCCESS: 'PIZZA_GET_PIZZAS_SUCCESS',
  PIZZA_GET_PIZZAS_FAILURE: 'PIZZA_GET_PIZZAS_FAILURE',
  PIZZA_CREATE_PRICE_FROM_SIZE: 'PIZZA_CREATE_PRICE_FROM_SIZE',
  PIZZA_ADD_INGREDIENT: 'PIZZA_ADD_INGREDIENT',
  PIZZA_ADD_UPDATE_INGREDIENT: 'PIZZA_ADD_UPDATE_INGREDIENT',
  PIZZA_REFRESH_INGREDIENTS: 'PIZZA_REFRESH_INGREDIENTS',
  PIZZA_REDUCE_INGREDIENT: 'PIZZA_REDUCE_INGREDIENT',
  PIZZA_CHANGE_PAGINATION_PAGE: 'PIZZA_CHANGE_PAGINATION_PAGE',

  PIZZA_CLEAR: 'PIZZA_CLEAR',

  BASKET_ADD_ITEM: 'BASKET_ADD_ITEM',
  BASKET_INCREMENT_PIZZA_AMOUNT: 'BASKET_INCREMENT_PIZZA_AMOUNT'
}
