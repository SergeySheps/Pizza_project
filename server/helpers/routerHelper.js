const express = require('express')
const router = express.Router()
const verifyToken = require('../helpers/verifyToken')
const userController = require('../controllers/userControllers')
const pizzaController = require('../controllers/pizzaControllers')
const employeeController = require('../controllers/employeeControllers')

router.get('/', pizzaController.getProducts)
router.get('/main', verifyToken, pizzaController.getProducts)
router.get('/cook', verifyToken, employeeController.getOrdersQueue)
router.put('/cook', verifyToken, employeeController.saveOrderAcceptor)
router.post('/cook', verifyToken, employeeController.getOrdersInProgress)
router.post('/registration', userController.register)
router.post('/login', userController.login)
router.post('/main', verifyToken, userController.saveOrderData)
router.post('/main/history', verifyToken, userController.getOrdersHistory)


module.exports = router
