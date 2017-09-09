// Posts
const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey',
  'Content-Type': 'application/json'
}

// Fetch all posts in the database
export function fetchAllPostsRequest() {
  return fetch(url+'/posts', {headers}).then(res => res.json())
}

// Fetch one specific post
export function fetchPostByIdRequest(id) {
  const method = 'GET'
  return fetch(`${url}/posts/${id}`, {method, headers}).then(res => res.json())
}


// Add post to the database
export function addPostRequest(title, body, author, category) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    id: Math.random().toString(36).substr(2, 16),
    timestamp: Date.now(),
    title,
    body,
    author,
    category, 
  })
  return fetch(`${url}/posts`, {method, body:requestBody, headers}).then(res => res.json())
}

// Edit a post
export function editPostRequest(id, title, body) {
  const method = 'PUT'
  const requestBody = JSON.stringify({
    title,
    body, 
  })
  return fetch(`${url}/posts/${id}`, {method, body:requestBody, headers}).then(res => res.json())
}

// Delete a post
export function deletePostRequest(id) {
  const method = 'DELETE'
  const requestBody = JSON.stringify({
    id
  })
  return fetch(`${url}/posts/${id}`, {method, body:requestBody, headers})
}

// Fetch all posts of a certain category
export function fetchCategoryPosts(category) {
  return fetch(`${url}/${category}/posts`, {headers}).then(res => res.json())
}

// Vote up or down on a post
export function voteForPostRequest(id, option) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    option
  })
  return fetch(`${url}/posts/${id}`, {method, body:requestBody, headers})
    .then(res => res.json())
}



// Comments
// Add comment on a post
export function addPostCommentRequest(postId, author, body) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    id: Math.random().toString(36).substr(2, 16),
    timestamp: Date.now(),
    author,
    body,
    parentId: postId,
  })
  return fetch(`${url}/comments`, {method, body:requestBody, headers}).then(res => res.json())
}

// Edit a comment on a post
export function editPostCommentRequest(commentId, body) {
  const method = 'PUT'
  const requestBody = JSON.stringify({
    timestamp: Date.now(),
    body,
  })
  return fetch(`${url}/comments/${commentId}`, {method, body:requestBody, headers}).then(res => res.json())
}

// Delete a comment on a post
export function deletePostCommentRequest(id) {
  const method = 'DELETE'
  return fetch(`${url}/comments/${id}`, {method, headers})
}

// Fetch all comments on a post
export function fetchPostCommentsRequest(id) {
  const method = 'GET'
  return fetch(`${url}/posts/${id}/comments`, { method, headers }).then(res => res.json())
}

// Vote for a comment on a post
export function votePostCommentRequest(id, option) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    option
  })
  return fetch(`${url}/comments/${id}`, {method, body:requestBody, headers}).then(res => res.json())
}



// Categories
export function fetchCategoriesRequest() {
  return fetch(url+'/categories', {headers}).then(res => res.json())
}



// Forms
export function toggleEditPostFormRequest(id) {
    return fetch(`${url}/posts/${id}`, {headers}).then(res => res.json())
}