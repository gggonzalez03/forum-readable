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
        openedPostComments: action.comments,
      }
    case VOTE_COMMENT:
      return {
        ...state,
        openedPostComments: state.openedPostComments.map((comment) => {
          if (comment.id === action.id)
            comment.voteScore = action.voteScore
          return comment
        }),
      }
    case ADD_COMMENT_ON_POST:
      return {
        ...state,
        openedPostComments: [...state.openedPostComments, action.comment]
      }

    case EDIT_COMMENT_ON_POST:
      return {
        ...state,
        openedPostComments: state.openedPostComments.map((comment) => {
          if (comment.id === action.comment.id)
            return action.comment
          return comment
        }),
      }
    case DELETE_COMMENT_ON_POST:
      return {
        ...state,
        openedPostComments: state.openedPostComments.filter((comment) => comment.id !== action.id),
      }
    default:
      return state
  }
}