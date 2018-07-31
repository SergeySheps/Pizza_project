const config = require('../config.json')
const db = require('../helpers/dbHelpers')
const mongoose = require('mongoose')
const Ingredients = db.Ingredients

module.exports = {
  getProducts
}

async function getProducts() {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  const products = await Ingredients.find({}).then(res => {
    mongoose.connection.close()
    return res
  })

  return products
}
