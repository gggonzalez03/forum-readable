import * as api from './api'
export const RECEIVE_COMMENTS_BY_POST_ID = 'RECEIVE_COMMENTS_BY_POST_ID'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const ADD_COMMENT_ON_POST = 'ADD_COMMENT_ON_POST'
export const EDIT_COMMENT_ON_POST = 'EDIT_COMMENT_ON_POST'
export const DELETE_COMMENT_ON_POST = 'DELETE_COMMENT_ON_POST'

// Asynchronous Requests
export function addPostComment(postId, author, body) {
  return function(dispatch) {
    api.addPostCommentRequest(postId, author, body)
    .then(comment => dispatch(
      {
        type: ADD_COMMENT_ON_POST,
        comment,
      }
    ))
  }
}

export function editPostComment(commentId, body) {
  return function(dispatch) {
    api.editPostCommentRequest(commentId, body)
    .then(comment => dispatch(
      {
        type: EDIT_COMMENT_ON_POST,
        comment,
      }
    ))
  }
}

export function deletePostComment(id) {
  return function(dispatch) {
    api.deletePostCommentRequest(id)
      .then(comment => dispatch(
        {
          type: DELETE_COMMENT_ON_POST,
          id,
          comment,
        }
      ))
  }
}

export function fetchPostComments(id) {
  return function (dispatch) {
    api.fetchPostCommentsRequest(id)
      .then(comments => dispatch(
        {
          type: RECEIVE_COMMENTS_BY_POST_ID,
          parentId: id,
          comments,
        }
      ))
  }
}

export function votePostComment(id, option) {
  return function(dispatch) {
    api.votePostCommentRequest(id, option)
    .then(comment => dispatch(
      {
        type: VOTE_COMMENT,
        comment,
      }
    ))
  }
}