import {
  RECEIVE_CATEGORIES,
  RECEIVE_ALL_POSTS
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
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export default posts