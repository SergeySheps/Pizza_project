import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import QueueOrder from './QueueOrder'
import {connect} from 'react-redux'
import '../../styles/order.css'

class QueueOrders extends Component {
  sortQueue = queue => {
    return queue.length > 1
      ? queue.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate))
      : queue
  }

  render() {
    const {queue, handleClose} = this.props

    return (
      <Table fixed textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pizzas</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.sortQueue(queue).map(item => (
            <QueueOrder {...item} key={item.id} handleClose={handleClose} />
          ))}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const queue = ownProps.queue

  return {
    queue
  }
}

export default connect(mapStateToProps)(QueueOrders)
