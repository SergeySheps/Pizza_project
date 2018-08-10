import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'
import QueueOrder from './QueueOrder'
import {connect} from 'react-redux'
import '../../styles/order.css'

class QueueOrders extends Component {
  transformQueue = queue => {
    return queue.length > 1
      ? queue.sort((a, b) => {
          return new Date(a.creationDate) - new Date(b.creationDate)
        })
      : queue
  }

  render() {
    const {queue} = this.props
    console.log(queue, 'before')
    console.log(this.transformQueue(queue), 'after')

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
          {this.transformQueue(queue).map(item => (
            <QueueOrder {...item} key={item.id} />
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
