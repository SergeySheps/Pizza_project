const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TimeJournal = new Schema({
  startTime: {type: Date, required: true},
  finishTime: {type: Date, default: Date.now()},
  todaysDate: {type: Date, default: new Date(Date.now()).toLocaleDateString()},
  email: {type: String, required: true}
})

TimeJournal.set('toJSON', {virtuals: true})

module.exports = mongoose.model('TimeJournal', TimeJournal)
