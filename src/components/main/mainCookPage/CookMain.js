import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {employeeActions} from '../../../actions/employeeActions'
import Timer from './Timer'
import OrderList from './OrderList'
import '../../../styles/cookMain.css'

class CookMain extends Component {
  state = {
    hasStartWork: false,
    isFinishedWork: false
  }

  componentWillMount() {
    const {getOrdersInProgress, email} = this.props

    getOrdersInProgress(email)
  }

  handleWorkingState = () => {
    const {hasStartWork} = this.state
    !hasStartWork
      ? this.setState({
          hasStartWork: true
        })
      : this.setState({
          isFinishedWork: true
        })
  }

  render() {
    const {hasStartWork, isFinishedWork} = this.state
    const {orders} = this.props

    return (
      <main className="cook__mainPage">
        <div className="manage-panel__content">
          <div className="manage-panel__content-time">
            {isFinishedWork ? (
              <Button fluid={false} color="green">
                Day report
              </Button>
            ) : (
              <Button fluid={false} primary onClick={this.handleWorkingState}>
                {!hasStartWork ? 'Start work' : 'Finish work'}
              </Button>
            )}
            <h2 className="timer__work-time">
              Time since start work:{' '}
              {hasStartWork ? <Timer parentState={this.state} /> : '00:00:00'}
            </h2>
          </div>
        </div>
        <div className="orders-in-process">
          <ul className="orders-in-process__list">
            {orders.length > 0 ? (
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
  const {email} = state.login

  return {
    orders,
    email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrdersInProgress: values => dispatch(employeeActions.getOrdersInProgress(values))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CookMain)
