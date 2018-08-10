import React, {Component} from 'react'
import {Table, Button} from 'semantic-ui-react'
import QueueItems from '../../oredersQueue/QueueItems'
import {connect} from 'react-redux'

class OrderList extends Component {
  render() {
    const {order} = this.props

    return (
      <Table color="teal" textAlign="center">
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell>Pizzas</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{order ? <QueueItems queue={order.pizzaData} /> : ''}</Table.Cell>
            <Table.Cell>
              <Button fluid={false} color="green">
                Finish
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const order = ownProps.activeOrder

  return {
    order
  }
}

export default connect(mapStateToProps)(OrderList)
