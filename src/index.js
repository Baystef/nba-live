import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { config } from 'dotenv';
import App from './components/App';
import './index.css';
import reducers from './reducers';

config();

const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware));

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
