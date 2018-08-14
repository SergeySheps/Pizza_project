import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'semantic-ui-react'
import {employeeActions} from '../../../actions/employeeActions'
import {toDateTime, getTimeSinceStart} from '../../../helpers/dateTimeHelper'
import Timer from './Timer'
import OrderList from './OrderList'
import '../../../styles/cookMain.css'
import {
  setLocalStorageItem,
  getLocalStorageItem
} from '../../../helpers/authorizationHelper'

class CookMain extends Component {
  state = {
    hasStartWork: false,
    isFinishedWork: false
  }

  componentWillMount() {
    const {getOrdersInProgress, email, getStartTime} = this.props

    getOrdersInProgress(email)
    getStartTime(email)
  }

  handleStartWork = () => {
    this.setState({
      hasStartWork: true
    })

    const {saveStartTime, email} = this.props

    saveStartTime({
      email,
      startTime: Date.now()
    })
  }

  handlePauseWork = () => {
    this.setState({
      hasStartWork: false
    })

    const {saveFinishTime, email, getStartTime} = this.props

    saveFinishTime({
      email,
      finishTime: Date.now()
    })
    getStartTime(email)
  }

  handleFinishWork = () => {
    this.setState({
      isFinishedWork: true
    })
  }

  showDayReport = () => {}

  render() {
    const {hasStartWork, isFinishedWork} = this.state
    const {orders, timeJournal} = this.props

    return (
      <main className="cook__mainPage">
        <div className="manage-panel__content">
          <div className="manage-panel__content-time">
            <div className="manage-panel__content-container-buttons">
              <Button fluid={false} primary onClick={this.handleStartWork}>
                Start work
              </Button>
              <Button fluid={false} primary onClick={this.handlePauseWork}>
                Pause
              </Button>
              {isFinishedWork ? (
                <Button fluid={false} color="green" onClick={this.showDayReport}>
                  Day report
                </Button>
              ) : (
                <Button fluid={false} primary onClick={this.handleFinishWork}>
                  Finish work
                </Button>
              )}
            </div>
            <h2 className="timer__work-time">
              Time since start work:{' '}
              {hasStartWork ? (
                <Timer parentState={this.state} />
              ) : timeJournal ? (
                getTimeSinceStart(
                  toDateTime(
                    new Date(timeJournal.finishTime).getTime() -
                      new Date(timeJournal.startTime).getTime()
                  )
                )
              ) : (
                '00:00:00'
              )}
            </h2>
          </div>
        </div>
        <div className="orders-in-process">
          <ul className="orders-in-process__list">
            {!orders ? (
              <Icon name="spinner" loading />
            ) : orders.length > 0 ? (
              orders.map(order => <OrderList activeOrder={order} key={order.id} />)
            ) : (
              <h2>No active orders</h2>
            )}
          </ul>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  const orders = state.activeOrders
  const timeJournal = state.timeJournal
  const {email} = state.login

  return {
    orders,
    email,
    timeJournal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrdersInProgress: values => dispatch(employeeActions.getOrdersInProgress(values)),
    saveStartTime: values => dispatch(employeeActions.saveStartTime(values)),
    saveFinishTime: values => dispatch(employeeActions.saveFinishTime(values)),
    getStartTime: values => dispatch(employeeActions.getStartTime(values))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CookMain)
