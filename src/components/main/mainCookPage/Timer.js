import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toDateTime, getTimeSinceStart} from '../../../helpers/dateTimeHelper'
import {
  setLocalStorageItem,
  getLocalStorageItem
} from '../../../helpers/authorizationHelper'

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

  tick = () => {
    const {timeJournal} = this.props

    this.setState({
      timeSinceStart: toDateTime(
        Date.now() -
          this.state.startTime +
          (timeJournal
            ? new Date(timeJournal.finishTime).getTime() -
              new Date(timeJournal.startTime).getTime()
            : 0)
      )
    })
  }

  render() {
    const {timeSinceStart} = this.state

    return <span>{timeSinceStart ? getTimeSinceStart(timeSinceStart) : ''}</span>
  }
}

const mapStateToProps = state => {
  const timeJournal = state.timeJournal

  return {
    timeJournal
  }
}

export default connect(mapStateToProps)(Timer)
