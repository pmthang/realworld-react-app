import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import { logger } from 'redux-logger'

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

export const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();










