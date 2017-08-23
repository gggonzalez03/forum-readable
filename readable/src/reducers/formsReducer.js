import {
  EDIT_POST_TITLE,
  EDIT_POST_BODY,
  EDIT_POST_USERNAME,
  EDIT_POST_CATEGORY,
  SUBMIT_POST,
} from '../actions/forms'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined,
  isAddPostFormOpen: false,
  editPostTitle: "",
  editPostBody: "",
  editPostUsername: "",
  editPostCategory: "",
}

export default function forms(state=initialState, action) {
  switch(action.type) {
    case EDIT_POST_TITLE:
      return {
        ...state,
        editPostTitle: action.title
      }
    case EDIT_POST_BODY:
      return {
        ...state,
        editPostBody: action.body
      }
    case EDIT_POST_USERNAME:
      return {
        ...state,
        editPostUsername: action.username
      }
    case EDIT_POST_CATEGORY:
      return {
        ...state,
        editPostCategory: action.category
      }
    case SUBMIT_POST:
      return {
        ...state,
        editPostTitle: "",
        editPostBody: "",
        editPostUsername: "",
        editPostCategory: ""
      }
    default:
      return state
  }
}