import {
  EDIT_POST_TITLE,
  EDIT_POST_BODY,
  EDIT_POST_USERNAME,
  EDIT_POST_CATEGORY,
  SUBMIT_POST,
  TOGGLE_ADD_POST_FORM,
  TOGGLE_DELETE_POST_CONFIRMATION,
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
    case TOGGLE_ADD_POST_FORM:
      return {
        ...state,
        isAddPostFormOpen: !state.isAddPostFormOpen
      }
    case SUBMIT_POST:
      return {
        ...state,
        editPostTitle: "",
        editPostBody: "",
        editPostUsername: "",
        editPostCategory: ""
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