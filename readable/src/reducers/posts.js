import {
  RECEIVE_ALL_POSTS,
  RECEIVE_CATEGORY_POSTS,
  DELETE_POST,
} from '../actions/posts'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined,
  isSideBarMenuOpen: false,
  isDeleteConfirmationOpen: false,
}

export default function posts(state=initialState, action) {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        posts: action.posts.filter((post) => post.deleted !== true)
      }
    case RECEIVE_CATEGORY_POSTS:
      return {
        ...state,
        posts: action.posts
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