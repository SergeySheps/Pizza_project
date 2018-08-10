import React, {Component} from 'react'
import {compose} from 'redux'
import {workTimeFormat} from '../../../constants/constants'

class Timer extends Component {
  state = {
    timer: null,
    startTime: null,
    timeSinceStart: null
  }

  componentWillMount = () => {
    const timer = setInterval(this.tick, 1000)
    this.setState({
      startTime: Date.now(),
      timer
    })
  }

  componentDidUpdate = () => {
    const {parentState} = this.props
    const {timer} = this.state

    if (parentState.isFinishedWork) {
      clearInterval(timer)
    }
  }

  toDateTime = millisecs => {
    let date = new Date(1970, 0, 1)
    date.setMilliseconds(millisecs)
    return date
  }

  tick = () => {
    this.setState({
      timeSinceStart: this.toDateTime(Date.now() - this.state.startTime)
    })
  }

  correctingTimeLook = unitTime => {
    return String(unitTime).length === 2 ? unitTime : '0' + unitTime
  }

  getTimerHours = workTimeFormat => {
    const {timeSinceStart} = this.state

    return workTimeFormat.replace(
      'hh',
      this.correctingTimeLook(timeSinceStart.getHours())
    )
  }

  getTimerMinutes = workTimeFormat => {
    const {timeSinceStart} = this.state

    return workTimeFormat.replace(
      'mm',
      this.correctingTimeLook(timeSinceStart.getMinutes())
    )
  }

  getTimerSeconds = workTimeFormat => {
    const {timeSinceStart} = this.state

    return workTimeFormat.replace(
      'ss',
      this.correctingTimeLook(timeSinceStart.getSeconds())
    )
  }

  getTimeSinceStart = () => {
    return compose(
      this.getTimerHours,
      this.getTimerMinutes,
      this.getTimerSeconds
    )(workTimeFormat)
  }

  render() {
    const {timeSinceStart} = this.state

    return <span>{timeSinceStart ? this.getTimeSinceStart() : '00:00:00'}</span>
  }
}

export default Timer
