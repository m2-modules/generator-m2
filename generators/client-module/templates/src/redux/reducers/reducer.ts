import { EXAMPLE_ACTION } from '../actions/<%= lccModuleName %>'
import { Store } from '@m2-modules/redux-manager'
import { I<%= uccModuleName %>State } from '../../interfaces'

const INITIAL_STATE: I<%= uccModuleName %>State = {
  prop1: 'prop1', 
  prop2: 'prop2'
}

export const <%= lccModuleName %> = (
  state = INITIAL_STATE,
  action: { type: string; <%= lccModuleName %>: I<%= uccModuleName %>State }
) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state

      default:
      return state
  }
}

export function exampleAction(store: Store, action: I<%= uccModuleName %>State): void {
  store.dispatch({
    type: EXAMPLE_ACTION,
    <%= lccModuleName %>: action
  })
}
