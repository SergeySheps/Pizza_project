const {statusCodes} = require('../constants/constants')
const pizzaServices = require('../services/pizzaServices')

module.exports = {
  getProducts
}

function getProducts(req, res) {
  pizzaServices.getProducts().then(
    products => {
      products ? res.json(products) : res.status(statusCodes.BadRequest).json({message: error.message})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}
