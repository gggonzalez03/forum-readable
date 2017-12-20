import {
  RECEIVE_COMMENTS_BY_POST_ID,
  VOTE_COMMENT,
  ADD_COMMENT_ON_POST,
  EDIT_COMMENT_ON_POST,
  DELETE_COMMENT_ON_POST,
} from '../actions/comments'

import initialState from './initialState'

export default function comments(state=initialState.general, action) {
  switch(action.type) {
    case RECEIVE_COMMENTS_BY_POST_ID:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.parentId]: action.comments,
        }
      }
    case VOTE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: [
            ...state.comments[action.comment.parentId].map(comment=> {
              if (action.comment.id === comment.id)
                return action.comment
              return comment
            })
          ]
        }
      }
    case ADD_COMMENT_ON_POST:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: [
            ...state.comments[action.comment.parentId],
            action.comment,
          ]
        },
      }

    case EDIT_COMMENT_ON_POST:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: [
            ...state.comments[action.comment.parentId].map(comment=> {
              if (action.comment.id === comment.id)
                return action.comment
              return comment
            })
          ]
        }
      }
    case DELETE_COMMENT_ON_POST:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.comment.parentId]: [
            ...state.comments[action.comment.parentId].filter(comment=> action.comment.id !== comment.id)
          ]
        }
      }
    default:
      return state
  }
}