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

function deleteOrderFromQueue(req, res) {
  employeeServices.deleteOrderFromQueue(req.body).then(
    resolve => {
      res.json(resolve)
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

function postCookRequests(req, res) {
  req.query.isSaveReadyOrder ? saveReadyOrder(req, res) : getOrdersInProgress(req, res)
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

function saveReadyOrder(req, res) {
  employeeServices.saveReadyOrder(req.body).then(
    resolve => {
      res.json(resolve)
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

function getCookedOrdersHistory(req, res) {
  employeeServices.getCookedOrdersHistory(req.body).then(
    history => {
      history
        ? res.json(history)
        : res.status(statusCodes.BadRequest).json({message: error.message})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

module.exports = {
  getOrdersQueue,
  saveOrderAcceptor,
  postCookRequests,
  deleteOrderFromQueue,
  getCookedOrdersHistory
}
