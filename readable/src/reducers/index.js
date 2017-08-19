import {
  RECEIVE_CATEGORIES,
  RECEIVE_ALL_POSTS,
  RECEIVE_CATEGORY_POSTS
} from '../actions'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined
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
    case RECEIVE_CATEGORY_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export default posts