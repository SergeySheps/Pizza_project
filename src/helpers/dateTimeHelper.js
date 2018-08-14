import {compose} from 'redux'
import {workTimeFormat} from '../constants/constants'

const toDateTime = millisecs => {
  let date = new Date(1970, 0, 1)

  date.setMilliseconds(millisecs)

  return date
}

const correctingTimeLook = unitTime => {
  return String(unitTime).length === 2 ? unitTime : '0' + unitTime
}

const getTimerHours = timeSinceStart => workTimeFormat => {
  return workTimeFormat.replace('hh', correctingTimeLook(timeSinceStart.getHours()))
}

const getTimerMinutes = timeSinceStart => workTimeFormat => {
  return workTimeFormat.replace('mm', correctingTimeLook(timeSinceStart.getMinutes()))
}

const getTimerSeconds = timeSinceStart => workTimeFormat => {
  return workTimeFormat.replace('ss', correctingTimeLook(timeSinceStart.getSeconds()))
}

const getTimeSinceStart = timeSinceStart => {
  return compose(
    getTimerHours(timeSinceStart),
    getTimerMinutes(timeSinceStart),
    getTimerSeconds(timeSinceStart)
  )(workTimeFormat)
}

export {toDateTime, getTimeSinceStart}
