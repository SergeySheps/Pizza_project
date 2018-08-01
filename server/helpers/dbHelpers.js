const mongoose = require('mongoose')
const userModel = require('../DBmodels/userModel')
const ingredientModel = require('../DBmodels/ingredientModel')

mongoose.Promise = global.Promise

module.exports = {
  User: userModel,
  Ingredients: ingredientModel
}
