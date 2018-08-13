const config = require('../config.json')
const db = require('../helpers/dbHelpers')
const mongoose = require('mongoose')
const Order = db.Order
const ReadyOrder = db.ReadyOrder

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

  return await Order.find({
    orderAcceptor: email,
    isInProgress: true,
    isCompleted: false
  }).then(res => {
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

async function deleteOrderFromQueue(orderData) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await Order.findOneAndUpdate(
    {_id: orderData.id},
    {isInProgress: false, isCompleted: true}
  ).then(res => {
    mongoose.connection.close().catch(() => {})
    return res
  })
}

async function saveReadyOrder(orderData) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  const readyOrder = new ReadyOrder(orderData)

  return await readyOrder.save().then(res => {
    mongoose.connection.close().catch(() => {})
    return res
  })
}

async function getCookedOrdersHistory({email}) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await ReadyOrder.find({cookEmail: email}).then(result => {
    mongoose.connection.close().catch(() => {})
    return result
  })
}

module.exports = {
  getOrdersQueue,
  getOrdersInProgress,
  saveOrderAcceptor,
  saveReadyOrder,
  deleteOrderFromQueue,
  getCookedOrdersHistory
}
