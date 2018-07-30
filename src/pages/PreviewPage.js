import React from 'react'
import Header from '../components/header/Header'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'

const PreviewPage = props => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  )
}

// TODO: i'll need this functions in further development
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    login: values => dispatch(userActions.login(values))
  }
}
//
export default connect(mapStateToProps)(PreviewPage)
