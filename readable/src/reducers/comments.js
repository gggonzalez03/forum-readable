import {
  RECEIVE_COMMENTS_BY_POST_ID,
  VOTE_COMMENT,
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
    default:
      return state
  }
}