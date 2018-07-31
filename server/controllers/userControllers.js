const {statusCodes} = require('../constants/constants')
const userServices = require('../services/userServices')

module.exports = {
  register,
  login,
  mainPage
}

function register(req, res) {
  if (req.query.isEqual) {
    userServices.checkEqualEmail(req.body).then(
      resolve => {
        res.json(resolve)
      },
      error => {
        res.status(statusCodes.InternalServerError).json({message: error.message})
      }
    )
  } else {
    userServices.createAccount(req.body).then(
      user => {
        res.json({})
      },
      error => {
        res.status(statusCodes.InternalServerError).json({message: error.message})
      }
    )
  }
}

function login(req, res) {
  userServices.login(req.body).then(
    user => {
      user ? res.json(user) : res.status(statusCodes.BadRequest).json({message: 'Incorrect Email or password'})
    },
    error => {
      res.status(statusCodes.InternalServerError).json({message: error.message})
    }
  )
}

function mainPage(req, res) {
  // editing queries from mainPage
}
