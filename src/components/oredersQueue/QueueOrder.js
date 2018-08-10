import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ModalEjectOrder from '../modals/ModalEjectOrder'
import {userActions} from '../../actions/userActions'

const QueueOrder = props => {
  const {pizzaData, isCompleted} = props

  return (
    <Table.Row>
      <ModalEjectOrder ordersQueue={pizzaData} />
      <Table.Cell negative={!isCompleted} positive={isCompleted}>
        {isCompleted ? 'In progress' : 'Pending'}
      </Table.Cell>
      <Table.Cell>
        <Button icon labelPosition="left" positive>
          <Icon name="angle right" />
          Proceed
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    submitPizzaOrder: values => dispatch(userActions.submitPizzaOrder(values)),
    addOrderToHistory: values => dispatch(userActions.addOrderToHistory(values))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(QueueOrder)
