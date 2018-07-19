import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import Root from './components/Root'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/register.css';
import './styles/menu.css';
import './styles/constructor.css';
import './styles/header.css';
import './styles/main.css';





const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Root store={store}/>
,document.getElementById('root')
)