import {
  UPDATE_APP_INFO,
  UPDATE_APP_NAME,
  UPDATE_APP_VERSION,
  UPDATE_BASE_URL
} from '../actions'

const INITIAL_STATE = {
  name: '<%= appName %>',
  baseUrl: location.origin,
  version: 'v0.0.1'
}

export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_APP_INFO: {
      return {
        ...state,
        ...action.app
      }
    }
    case UPDATE_APP_NAME:
      return {
        ...state,
        name: action.app.name
      }

    case UPDATE_BASE_URL:
      return {
        ...state,
        baseUrl: action.app.baseUrl
      }

    case UPDATE_APP_VERSION:
      return {
        ...state,
        version: action.app.version
      }

    default:
      return state
  }
}
