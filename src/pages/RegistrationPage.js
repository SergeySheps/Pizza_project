import React, {Component} from 'react'
import RegistrationForm from '../components/RegistrationForm'
import {userActions} from '../actions/userActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {toastr} from 'react-redux-toastr'

class RegistrationPage extends Component {
  componentDidUpdate(prevProps, prevState) {
    const {isFailRegister, onRegisterClear} = this.props

    if (isFailRegister !== prevProps.isFailRegister) {
      if (isFailRegister) {
        toastr.error('Registration', 'For some reason the registration was failed, please try again')
        onRegisterClear()
      }
    }
  }

  render() {
    const {register, hasBeenRegistered, onRegisterClear} = this.props

    if (hasBeenRegistered) {
      onRegisterClear()
      toastr.success('Registration', 'Registration is successfully completed')
      return <Redirect to="/login" />
    }

    return (
      <div className="registration">
        <main className="registration__content">
          <RegistrationForm onSubmit={values => register(values)} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {hasBeenRegistered, isFailRegister} = state.registration

  return {
    hasBeenRegistered,
    isFailRegister
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: registerFieldvalues => {
      const result = registerFieldvalues.isEmployee ? registerFieldvalues : {...registerFieldvalues, isEmployee: false}
      dispatch(userActions.register(result))
    },
    onRegisterClear: () => dispatch(userActions.registerClear())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage)
