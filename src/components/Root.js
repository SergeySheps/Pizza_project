import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/registration" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
        
      </Switch>
    </Router>
  </Provider>
)

export default Root