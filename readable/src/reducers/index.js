import {
  TOGGLE_SIDE_BAR_MENU,
} from '../actions'
import categories from './categories'
import posts from './posts'
import forms from './forms'

import { combineReducers } from 'redux'

import initialState from './initialState'

function index(state=initialState.general, action) {
  switch(action.type) {
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
  categories,
  posts,
  forms,
  index,
})