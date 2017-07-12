import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
// import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
