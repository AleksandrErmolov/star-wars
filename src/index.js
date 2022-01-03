import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux'

import App from './containers/App';

import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);