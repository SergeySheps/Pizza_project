import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import ModalEjectOrder from '../modals/ModalEjectOrder'
import {employeeActions} from '../../actions/employeeActions'

const QueueOrder = props => {
  const {
    pizzaData,
    isInProgress,
    saveOrderAcceptor,
    getOrdersInProgress,
    email,
    id
  } = props

  const handleProceedClick = () => {
    saveOrderAcceptor({email, id})
    getOrdersInProgress(email)
  }

  return (
    <Table.Row>
      <ModalEjectOrder ordersQueue={pizzaData} />
      <Table.Cell negative={!isInProgress} positive={isInProgress}>
        {isInProgress ? 'In progress' : 'Pending'}
      </Table.Cell>
      <Table.Cell>
        <Button
          fluid
          icon
          labelPosition="left"
          positive
          disabled={isInProgress}
          onClick={() => handleProceedClick()}>
          <Icon name="angle right" />
          Proceed
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

const mapStateToProps = state => {
  const {email} = state.login

  return {
    email
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveOrderAcceptor: values => dispatch(employeeActions.saveOrderAcceptor(values)),
    getOrdersInProgress: values => dispatch(employeeActions.getOrdersInProgress(values))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueueOrder)
