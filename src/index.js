import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import Root from './components'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import "semantic-ui-css/semantic.min.css"


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render( 
//     <Provider store={store}>
//     <div style={{ padding: 15 }}>
//       <h2>Synchronous Validation</h2>
//       
//       <Values form="syncValidation" />
//     </div>
//   </Provider>,
    <Root store={store}/>
,document.getElementById('root')
)