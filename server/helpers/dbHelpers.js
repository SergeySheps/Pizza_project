const mongoose = require('mongoose')
const userModel = require('../DBmodels/userModel')
const ingredientsModel = require('../DBmodels/ingredientsModel')

mongoose.Promise = global.Promise

module.exports = {
  User: userModel,
  Ingredients: ingredientsModel
}
