const express = require('express')
const router = express.Router()
const verifyToken = require('../helpers/verifyToken')
const userController = require('../controllers/userControllers')
const pizzaController = require('../controllers/pizzaControllers')

router.get('/', pizzaController.getProducts)
router.get('/main', verifyToken, pizzaController.getProducts)
router.post('/registration', userController.register)
router.post('/login', userController.login)
router.post('/main', verifyToken, userController.writeOrderData)
router.post('/main/history', verifyToken, userController.getOrdersHistory)


module.exports = router
