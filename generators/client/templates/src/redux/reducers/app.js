import { UPDATE_APP_NAME, UPDATE_BASE_URL } from '../actions'

const INITIAL_STATE = {
  name: '<%= appName %>',
  baseUrl: location.origin
}

export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_APP_NAME:
      return {
        ...state,
        name: action.name
      }

    case UPDATE_BASE_URL:
      return {
        ...state,
        baseUrl: action.baseUrl
      }

    default:
      return state
  }
}
