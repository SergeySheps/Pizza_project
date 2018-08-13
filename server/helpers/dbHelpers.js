const mongoose = require('mongoose')
const userModel = require('../DBmodels/userModel')
const ingredientModel = require('../DBmodels/ingredientModel')
const pizzaModel = require('../DBmodels/pizzaModel')
const orderModel = require('../DBmodels/orderModel')
const readyOrderModel = require('../DBmodels/readyOrderModel')

mongoose.Promise = global.Promise

module.exports = {
  User: userModel,
  Ingredients: ingredientModel,
  Pizza: pizzaModel,
  Order: orderModel,
  ReadyOrder: readyOrderModel
}
