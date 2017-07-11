import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'

import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
