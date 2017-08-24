import {
  RECEIVE_CATEGORIES,
} from '../actions/categories'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined,
  isSideBarMenuOpen: false,
  isDeleteConfirmationOpen: false,
}

export default function categories(state=initialState, action) {
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