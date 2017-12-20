import {
  RECEIVE_CATEGORIES,
  SELECT_CATEGORY,
} from '../actions/categories'
import initialState from './initialState'

export default function categories(state=initialState.categories, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category,
      }
    default:
      return state
  }
}