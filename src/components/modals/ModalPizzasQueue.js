import React, {Component} from 'react'
import {Button, Modal, Icon} from 'semantic-ui-react'
import QueueOrders from '../oredersQueue/QueueOrders'
import {connect} from 'react-redux'
import {employeeActions} from '../../actions/employeeActions'

class ModalPizzasQueue extends Component {
  render() {
    const {ordersQueue, getOrdersQueue} = this.props

    return (
      <Modal
        dimmer="blurring"
        trigger={
          <Button primary icon labelPosition="left" onClick={() => getOrdersQueue()}>
            <Icon name="ordered list" />
            Orders queue
          </Button>
        }
        size="large">
        <Modal.Header>
          <Icon name="ordered list" /> Orders queue
        </Modal.Header>
        <Modal.Content scrolling className="modal-window__content">
          {ordersQueue.length > 0 ? (
            <QueueOrders queue={ordersQueue} />
          ) : (
            <h2 className="modal-window__text">No orders</h2>
          )}
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  const ordersQueue = state.ordersQueue

  return {
    ordersQueue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrdersQueue: () => dispatch(employeeActions.getOrdersQueue())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPizzasQueue)
