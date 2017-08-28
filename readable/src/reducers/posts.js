import {
  RECEIVE_ALL_POSTS,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST_BY_ID,
  DELETE_POST,
} from '../actions/posts'

import initialState from './initialState'

export default function posts(state=initialState.posts, action) {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        posts: action.posts.filter((post) => post.deleted !== true),
        selectedCategory: action.category,
      }
    case RECEIVE_CATEGORY_POSTS:
      return {
        ...state,
        posts: action.posts,
        selectedCategory: action.category
      }
    case RECEIVE_POST_BY_ID:
      return {
        ...state,
        post: action.post
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id)
      }
    default:
      return state
  }
}