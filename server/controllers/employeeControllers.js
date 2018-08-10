const {statusCodes} = require('../constants/constants')
const employeeServices = require('../services/employeeServices')

function getOrdersQueue(req, res) {
  employeeServices.getOrdersQueue().then(
    queue => {
      queue
        ? res.json(queue)
        : res.status(statusCodes.BadRequest).json({message: error.message})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

module.exports = {
  getOrdersQueue
}
