import {
  RECEIVE_CATEGORIES,
  RECEIVE_ALL_POSTS,
  RECEIVE_CATEGORY_POSTS,
  DELETE_POST,
  TOGGLE_ADD_POST_FORM,
  TOGGLE_SIDE_BAR_MENU,
  TOGGLE_DELETE_POST_CONFIRMATION,
} from '../actions'
import forms from './formsReducer'

import { combineReducers } from 'redux'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined,
  isAddPostFormOpen: false,
  isSideBarMenuOpen: false,
  isDeleteConfirmationOpen: false,
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
    case TOGGLE_ADD_POST_FORM:
      return {
        ...state,
        isAddPostFormOpen: !state.isAddPostFormOpen
      }
    case TOGGLE_SIDE_BAR_MENU:
      return {
        ...state,
        isSideBarMenuOpen: !state.isSideBarMenuOpen
      }
    case TOGGLE_DELETE_POST_CONFIRMATION:
      return {
        ...state,
        isDeleteConfirmationOpen: !state.isDeleteConfirmationOpen,
        confirmDeletePostId: action.id
      }
    default:
      return state
  }
}

export default combineReducers({
  posts,
  forms
})