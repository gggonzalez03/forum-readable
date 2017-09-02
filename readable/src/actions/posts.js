import { selectCategory } from './categories'

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const OPEN_POST = 'OPEN_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID'
export const DELETE_POST = 'DELETE_POST'
export const VOTE = 'VOTE'
export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE'
export const SORT_POSTS = 'SORT_POSTS'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey',
  'Content-Type': 'application/json'
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

function editPost(editedPost) {
  return {
    type: EDIT_POST,
    editedPost,
  }
}

function openPost(post) {
  return {
    type: OPEN_POST,
    post
  }
}

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts: posts,
    category: '',
  }
}

export function receiveCategoryPosts(posts, category) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    posts: posts,
    category: category
  }
}

export function receivePostById(post) {
  return {
    type: RECEIVE_POST_BY_ID,
    post: post,
  }
}

export function sortPosts(sortBy, sortOrder) {
  const comparer = (first, second) => {
    if (sortOrder === "descending")
      return second[sortBy] - first[sortBy]
    else if (sortOrder === "ascending")
      return first[sortBy] - second[sortBy]
  }
  return {
    type: SORT_POSTS,
    comparer,
    sortOrder,
    sortBy,
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id: id
  }
}

export function vote(id, voteScore) {
  return {
    type: VOTE,
    id,
    voteScore,
  }
}

// Asynchronous requests
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
  return function(dispatch) {
    fetch(`${url}/posts`, {method, body:requestBody, headers})
    .then(() => fetchPostById(JSON.parse(requestBody).id))
    .then(post => dispatch(addPost(post)))
  }
}

export function editPostRequest(id, title, body) {
  const method = 'PUT'
  const requestBody = JSON.stringify({
    title,
    body, 
  })
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, {method, body:requestBody, headers})
    .then(() => fetchPostById(id))
    .then(post => dispatch(editPost(post)))
  }
}

export function openPostRequest(id) {
  return function(dispatch) {
    fetchPostById(id)
    .then((post) => dispatch(openPost(post)))
  }
}

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

    dispatch(selectCategory(''))
  }
}

export function fetchCategoryPosts(category) {
  return function(dispatch) {
    fetch(`${url}/${category}/posts`, {headers})
    .then(res => res.json())
    .then(posts => dispatch(receiveCategoryPosts(posts, category)))

    dispatch(selectCategory(category))
  }
}

export function voteRequest(id, option) {
  const method = 'POST'
  const requestBody = JSON.stringify({
    option
  })
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, {method, body:requestBody, headers})
    .then(res => res.json())
    .then((post) => dispatch(vote(post.id, post.voteScore)))
  }
}


// General purpose helper functions
export function fetchPostById(id) {
  const method = 'GET'
  return fetch(`${url}/posts/${id}`, {method, headers}).then(res => res.json())
}