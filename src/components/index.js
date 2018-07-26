import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
     {/* <Route path="/" component={SyncValidationForm onSubmit={showResults} } /> */}
     </Switch>
    </Router>
  </Provider>
)

export default Root