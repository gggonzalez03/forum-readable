export const RECEIVE_COMMENTS_BY_POST_ID = 'RECEIVE_COMMENTS_BY_POST_ID'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const ADD_COMMENT_ON_POST = 'ADD_COMMENT_ON_POST'
export const EDIT_COMMENT_ON_POST = 'EDIT_COMMENT_ON_POST'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey',
  'Content-Type': 'application/json'
}

function addCommentByPostId(comment) {
  return {
    type: ADD_COMMENT_ON_POST,
    comment,
  }
}

function editCommentByPostId(comment) {
  return {
    type: EDIT_COMMENT_ON_POST,
    comment,
  }
}

function receiveCommentsByPostId(comments) {
  return {
    type: RECEIVE_COMMENTS_BY_POST_ID,
    comments,
  }
}

function voteComment(id, voteScore) {
  return {
    type: VOTE_COMMENT,
    id,
    voteScore,
  }
}

// Server Requests
export function addCommentByPostIdRequest(postId, author, body) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    id: Math.random().toString(36).substr(2, 16),
    timestamp: Date.now(),
    author,
    body,
    parentId: postId,
  })
  return function(dispatch) {
    fetch(`${url}/comments`, {method, body:requestBody, headers})
    .then(res => res.json())
    .then(comment => dispatch(addCommentByPostId(comment)))
  }
}

export function editCommentByPostIdRequest(postId, body) {
  const method = 'PUT'
  const requestBody = JSON.stringify({
    timestamp: Date.now(),
    body,
  })
  return function(dispatch) {
    fetch(`${url}/comments/${postId}`, {method, body:requestBody, headers})
    .then(res => res.json())
    .then(comment => dispatch(editCommentByPostId(comment)))
  }
}

export function fetchCommentsByPostId(id) {
  const method = 'GET'
  return function (dispatch) {
    fetch(`${url}/posts/${id}/comments`, { method, headers })
      .then(res => res.json())
      .then(comments => dispatch(receiveCommentsByPostId(comments)))
  }
}

export function voteCommentRequest(id, option) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    option
  })
  return function(dispatch) {
    fetch(`${url}/comments/${id}`, {method, body:requestBody, headers})
    .then(res => res.json())
    .then((comment) => dispatch(voteComment(comment.id, comment.voteScore)))
  }
}