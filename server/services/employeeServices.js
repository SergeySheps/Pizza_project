const config = require('../config.json')
const db = require('../helpers/dbHelpers')
const mongoose = require('mongoose')
const Order = db.Order
const ReadyOrder = db.ReadyOrder
const TimeJournal = db.TimeJournal

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

async function saveStartTime(timeData) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )
  const repeatingQuery = await TimeJournal.find({
    email: timeData.email,
    todaysDate: new Date(Date.now()).toLocaleDateString()
  })
  
  if (repeatingQuery.length > 0){
    return {}
  }
  const timeJournal = new TimeJournal(timeData)

  return await timeJournal.save().then(res => {
    mongoose.connection.close().catch(() => {})
    return res
  })
}

async function saveFinishTime(timeData) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await TimeJournal.findOneAndUpdate(
    {email: timeData.email},
    {finishTime: timeData.finishTime}
  ).then(res => {
    mongoose.connection.close().catch(() => {})
    return res
  })
}

async function getStartTime({email}) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return await TimeJournal.findOne({
    email,
    todaysDate: new Date(Date.now()).toLocaleDateString()
  }).then(
    result => {
      mongoose.connection.close().catch(() => {})
      return result
    },
    error => {
      return {}
    }
  )
}

async function showDayReport({email}) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )
  ///////////new Date(Date.now()).toLocaleDateString()////////
  const qwe = TimeJournal.find({
    minNum: {$gte: 50},
    maxNum: {$lte: 100}
  })
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
  getCookedOrdersHistory,
  saveStartTime,
  saveFinishTime,
  showDayReport,
  getStartTime
}
