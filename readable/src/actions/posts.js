export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID'
export const DELETE_POST = 'DELETE_POST'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey',
  'Content-Type': 'application/json'
}

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts: posts
  }
}

export function receiveCategoryPosts(posts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts: posts
  }
}

export function receivePostById(post) {
  return {
    type: RECEIVE_POST_BY_ID,
    post: post,
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id: id
  }
}

// Asynchronous requests
export function deletePostRequest(id) {
  const method = 'DELETE'
  const requestBody = JSON.stringify({
    id
  })
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, {method, body:requestBody, headers})
    .then(() => dispatch(deletePost(id)))
  }
}

export function fetchAllPosts() {
  return function(dispatch) {
    fetch(url+'/posts', {headers})
    .then(res => res.json())
    .then(posts => dispatch(receiveAllPosts(posts)))
  }
}

export function fetchCategoryPosts(category) {
  return function(dispatch) {
    fetch(`${url}/${category}/posts`, {headers})
    .then(res => res.json())
    .then(posts => dispatch(receiveCategoryPosts(posts)))
  }
}

export function fetchPostById(id) {
  const method = 'GET'
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, {method, headers})
    .then(res => res.json())
    .then(post => dispatch(receivePostById(post)))
  }
}