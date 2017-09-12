import {
  EDIT_POST_TITLE,
  EDIT_POST_BODY,
  EDIT_POST_USERNAME,
  EDIT_POST_CATEGORY,
  TOGGLE_ADD_POST_FORM,
  TOGGLE_EDIT_POST_FORM,
  TOGGLE_DELETE_POST_CONFIRMATION,
  TOGGLE_DELETE_COMMENT_CONFIRMATION,
  EDIT_COMMENT_AUTHOR,
  EDIT_COMMENT_BODY,
  TOGGLE_ADD_COMMENT_FORM,
  TOGGLE_EDIT_COMMENT_FORM,
} from '../actions/forms'
import initialState from './initialState'

export default function forms(state=initialState.forms, action) {
  switch(action.type) {
    case EDIT_POST_TITLE:
      return {
        ...state,
        editPostForm: {
          ...state.editPostForm,
          editPostTitle: action.title,
        },
      }
    case EDIT_POST_BODY:
      return {
        ...state,
        editPostForm: {
          ...state.editPostForm,
          editPostBody: action.body,
        },
      }
    case EDIT_POST_USERNAME:
      return {
        ...state,
        editPostForm: {
          ...state.editPostForm,
          editPostUsername: action.username
        },
      }
    case EDIT_POST_CATEGORY:
      return {
        ...state,
        editPostForm: {
          ...state.editPostForm,
          editPostCategory: action.category
        },        
      }
    case EDIT_COMMENT_AUTHOR:
      return {
        ...state,
        editCommentForm: {
          ...state.editCommentForm,
          editCommentAuthor: action.author,
        }       
      }
    case EDIT_COMMENT_BODY:
      return {
        ...state,
        editCommentForm: {
          ...state.editCommentForm,
          editCommentBody: action.body,
        }
      }
    case TOGGLE_ADD_COMMENT_FORM:
      return {
        ...state,
        isEditCommentFormOpen: !state.isEditCommentFormOpen,
        editCommentForm: {
          editCommentId: action.comment.id,
          editCommentBody: action.comment.body,
          editCommentAuthor: action.comment.author,
        }
      }
    case TOGGLE_EDIT_COMMENT_FORM:
      return {
        ...state,
        isEditCommentFormOpen: !state.isEditCommentFormOpen,
        editCommentForm: {
          editCommentId: action.comment.id,
          editCommentBody: action.comment.body,
          editCommentAuthor: action.comment.author,
        }
      }
    case TOGGLE_ADD_POST_FORM:
      return {
        ...state,
        isAddPostFormOpen: !state.isAddPostFormOpen,
        editPostForm: {
          editPostTitle: action.editPostTitle,
          editPostBody: action.editPostBody,
          editPostUsername: action.editPostUsername,
          editPostCategory: action.editPostCategory,
        },
      }
    case TOGGLE_EDIT_POST_FORM:
      return {
        ...state,
        isEditPostFormOpen: !state.isEditPostFormOpen,
        editPostForm: {
          editPostId: action.id,
          editPostTitle: action.title,
          editPostBody: action.body,
          editPostUsername: action.username,
          editPostCategory: action.category,
        },
      }
    case TOGGLE_DELETE_POST_CONFIRMATION:
      return {
        ...state,
        isDeleteConfirmationOpen: !state.isDeleteConfirmationOpen,
        editPostForm: {
          editPostId: action.id,
          editPostTitle: action.title,
          editPostBody: action.body,
          editPostUsername: action.username,
          editPostCategory: action.category,
        },
      }
    case TOGGLE_DELETE_COMMENT_CONFIRMATION:
      return {
        ...state,
        isDeleteCommentConfirmationOpen: !state.isDeleteCommentConfirmationOpen,
        editCommentForm: {
          editCommentId: action.id,
          editCommentAuthor: action.author,
          editCommentBody: action.body,
        }
      }
    default:
      return state
  }
}