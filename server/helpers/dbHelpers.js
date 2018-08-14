const mongoose = require('mongoose')
const config = require('../config.json')
const userModel = require('../DBmodels/userModel')
const ingredientModel = require('../DBmodels/ingredientModel')
const pizzaModel = require('../DBmodels/pizzaModel')
const orderModel = require('../DBmodels/orderModel')
const timeJournalModal = require('../DBmodels/timeJournalModal')
const readyOrderModel = require('../DBmodels/readyOrderModel')

mongoose.Promise = global.Promise
// const qwe = mongoose.connect(
//   config.connectionDBString,
//   {useNewUrlParser: true}
// )
// console.log(qwe)
module.exports = {
  User: userModel,
  Ingredients: ingredientModel,
  Pizza: pizzaModel,
  Order: orderModel,
  ReadyOrder: readyOrderModel,
  TimeJournal: timeJournalModal
}
