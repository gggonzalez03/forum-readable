export const RECEIVE_COMMENTS_BY_POST_ID = 'RECEIVE_COMMENTS_BY_POST_ID'
export const VOTE_COMMENT = 'VOTE_COMMENT'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey',
  'Content-Type': 'application/json'
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