import { store } from '@m2fw/redux-manager'
import { ADD_PAGE, route } from '@m2fw/router'
import { app } from './redux/reducers'

store.addReducers({
  app,
  route
})

store.dispatch({
  type: ADD_PAGE,
  pages: []
})

import('./<%= mainComponent %>').then(() => {
  console.log(`<%= appName %> is ready to roll! (Powered by M2FW)`)
})
