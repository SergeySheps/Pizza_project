const db = require('../helpers/dbHelpers')
const {perPageLimit} = require('../constants/constants')
const Ingredients = db.Ingredients
const Pizza = db.Pizza
const mail = require("../helpers/mailHelper");

async function getProducts(req) {
  const queryStringValues = req.query

  // mail();

  return queryStringValues.numPage
    ? await Pizza.paginate(
        {},
        {page: queryStringValues.numPage, limit: perPageLimit, lean: true}
      )
    : await Ingredients.find({})
}

module.exports = {
  getProducts
}
