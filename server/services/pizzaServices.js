const config = require('../config.json')
const db = require('../helpers/dbHelpers')
const mongoose = require('mongoose')
const {perPageLimit} = require('../constants/constants')
const Ingredients = db.Ingredients
const Pizza = db.Pizza

async function getProducts(req) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  const queryStringValues = req.query

  return queryStringValues.numPage
    ? await Pizza.paginate({}, {page: queryStringValues.numPage, limit: perPageLimit, lean: true}).then(
        result => {
          mongoose.connection.close().catch(() => {})

          return result
        }
      )
    : await Ingredients.find({}).then(result => {
        mongoose.connection.close().catch(() => {})

        return result
      })
}

module.exports = {
  getProducts
}
