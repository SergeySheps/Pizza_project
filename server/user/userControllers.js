const express = require('express')
const {statusCodes} = require('../constants/constants')
const userServices = require('./userServices')
const router = express.Router()

module.exports = router

router.post('/registration', register)
router.post('/login', login)

function register(req, res) {
  userServices.createAccount(req.body).then(
    user => {
      res.json({})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    },
  )
}

function login(req, res) {
  userServices.login(req.body).then(
    user => {
      user
        ? res.json(user)
        : res.status(statusCodes.BadRequest).json({message: 'Incorrect Email or password'})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    },
  )
}
