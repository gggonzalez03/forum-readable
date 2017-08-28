import {
  RECEIVE_CATEGORIES,
} from '../actions/categories'
import initialState from './initialState'

export default function categories(state=initialState.categories, action) {
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