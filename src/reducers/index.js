import {
  RECEIVE_CATEGORIES
} from '../actions'

const initialState = {
  categories: []
}

function posts(state=initialState, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

export default posts