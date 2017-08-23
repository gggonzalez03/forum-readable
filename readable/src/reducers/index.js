import {
  RECEIVE_CATEGORIES,
  RECEIVE_ALL_POSTS,
  RECEIVE_CATEGORY_POSTS,
  TOGGLE_ADD_POST_FORM,
  TOGGLE_SIDE_BAR_MENU,
} from '../actions'
import forms from './formsReducer'

import { combineReducers } from 'redux'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined,
  isAddPostFormOpen: false,
  isSideBarMenuOpen: false,
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
    default:
      return state
  }
}

export default combineReducers({
  posts,
  forms
})