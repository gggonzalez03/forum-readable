import {
  EDIT_POST_TITLE,
  EDIT_POST_BODY,
  EDIT_POST_USERNAME,
  EDIT_POST_CATEGORY,
  SUBMIT_POST,
  SUBMIT_EDIT_POST,
  TOGGLE_ADD_POST_FORM,
  TOGGLE_EDIT_POST_FORM,
  TOGGLE_DELETE_POST_CONFIRMATION,
  INITIALIZE_EDIT_POST_FIELD_VALUES,
} from '../actions/forms'

const initialState = {
  categories: [],
  selectedCategory: undefined,
  posts: undefined,
  isAddPostFormOpen: false,
  isEditPostFormOpen: false,
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
        isAddPostFormOpen: !state.isAddPostFormOpen,
        editPostTitle: "",
        editPostBody: "",
        editPostUsername: "",
        editPostCategory: ""
      }
    case TOGGLE_EDIT_POST_FORM:
      return {
        ...state,
        isEditPostFormOpen: !state.isEditPostFormOpen,
        editPostFormId: action.id
      }
    case SUBMIT_POST:
      return {
        ...state,
        editPostTitle: "",
        editPostBody: "",
        editPostUsername: "",
        editPostCategory: ""
      }
    case SUBMIT_EDIT_POST:
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
    case INITIALIZE_EDIT_POST_FIELD_VALUES:
      return {
        ...state,
        editPostTitle: action.title,
        editPostBody: action.body,
        editPostUsername: action.username,
        editPostCategory: action.category
      }
    default:
      return state
  }
}