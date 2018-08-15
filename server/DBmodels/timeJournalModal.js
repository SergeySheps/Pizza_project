const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TimeJournal = new Schema({
  startTime: {type: Date, default: () => new Date()},
  finishTime: {type: Date, default:() => new Date()},
  todaysDate: {type: Date, default: () => new Date().toLocaleDateString()},
  timeSinceStartWork: {type: Number, default: null},
  email: {type: String, required: true}
})

TimeJournal.set('toJSON', {virtuals: true})

module.exports = mongoose.model('TimeJournal', TimeJournal)
