const config = require('../config.json')
const mongoose = require('mongoose')
const userModel = require('../user/userModel')

mongoose.connect(
  config.connectionDBString,
  { useNewUrlParser: true },
)

mongoose.Promise = global.Promise

module.exports = {
  User: userModel,
}
