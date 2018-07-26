const express = require('express')
const statusNames = require('../helpers/statusNames')
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
      res.status(statusNames.InternalServerError).json({ message: error.message })
    },
  )
}

function login(req, res) {
  userServices.login(req.body).then(
    user => {
      user
        ? res.json(user)
        : res.status(statusNames.BadRequest).json({ message: 'Incorrect Email or password' })
    },
    error => {
      res.status(statusNames.InternalServerError).json({ message: error.message })
    },
  )
}
