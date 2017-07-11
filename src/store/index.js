import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import rootReducer from '../reducers'
import { promiseMiddleware } from './middleware'

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger)
)

export default store
