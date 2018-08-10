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

module.exports = {
  getOrdersQueue
}
