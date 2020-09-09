import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'; //compose combines different middleware.
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import UrlReducer from './reducers/UrlReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore( UrlReducer, composeEnhancer(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />,
    </Router>,
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
