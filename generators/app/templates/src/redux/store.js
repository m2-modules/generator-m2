import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { app } from './reducers'

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  (state, action) => state,
  devCompose(lazyReducerEnhancer(combineReducers), applyMiddleware(reduxThunk))
)

store.addReducers({
  app
})
