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

function saveOrderAcceptor(req, res) {
  employeeServices.saveOrderAcceptor(req.body).then(
    resolve => {
      res.json(resolve)
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

function getOrdersInProgress(req, res) {
  employeeServices.getOrdersInProgress(req.body).then(
    orders => {
      orders ? res.json(orders) : res.status(statusCodes.BadRequest).json({})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

module.exports = {
  getOrdersQueue,
  saveOrderAcceptor,
  getOrdersInProgress
}
