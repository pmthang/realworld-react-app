import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

const defaultState = {
  appName: '留言板',
  articles: null
}

const rootReducer = (state = defaultState, action) => {
  return state
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();










