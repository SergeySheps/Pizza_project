import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegistrationPage from '../pages/RegistrationPage'
import LoginPage from '../pages/LoginPage'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root
