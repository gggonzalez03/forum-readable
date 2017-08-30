import {
  EDIT_POST_TITLE,
  EDIT_POST_BODY,
  EDIT_POST_USERNAME,
  EDIT_POST_CATEGORY,
  TOGGLE_ADD_POST_FORM,
  TOGGLE_EDIT_POST_FORM,
  TOGGLE_DELETE_POST_CONFIRMATION,
} from '../actions/forms'
import initialState from './initialState'

export default function forms(state=initialState.forms, action) {
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
        editPostTitle: action.editPostTitle,
        editPostBody: action.editPostBody,
        editPostUsername: action.editPostUsername,
        editPostCategory: action.editPostCategory
      }
    case TOGGLE_EDIT_POST_FORM:
      return {
        ...state,
        isEditPostFormOpen: !state.isEditPostFormOpen,
        editPostTitle: action.title,
        editPostBody: action.body,
        editPostUsername: action.username,
        editPostCategory: action.category,
        editingPost: action.editingPost,
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