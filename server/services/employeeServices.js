const config = require('../config.json')
const db = require('../helpers/dbHelpers')
const mongoose = require('mongoose')
const Order = db.Order

async function getOrdersQueue() {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await Order.find({isCompleted: false}).then(result => {
    mongoose.connection.close().catch(() => {})
    return result
  })
}

async function getOrdersInProgress({email}) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await Order.find({orderAcceptor: email, isInProgress: true}).then(res => {
    mongoose.connection.close().catch(() => {})
    return res
  })
}

async function saveOrderAcceptor(orderData) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await Order.findOneAndUpdate(
    {_id: orderData.id},
    {isInProgress: true, orderAcceptor: orderData.email}
  ).then(res => {
    mongoose.connection.close().catch(() => {})
    return res
  })
}

module.exports = {
  getOrdersQueue,
  getOrdersInProgress,
  saveOrderAcceptor
}
