export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'
export const TOGGLE_ADD_POST_FORM = 'TOGGLE_ADD_POST_FORMS'
export const TOGGLE_SIDE_BAR_MENU = 'TOGGLE_SIDE_BAR_MENU'
export const DELETE_POST = 'DELETE_POST'
export const TOGGLE_DELETE_POST_CONFIRMATION = 'TOGGLE_DELETE_POST_CONFIRMATION'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey'
}

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
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

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id: id
  }
}

export function toggleSideBarMenu() {
  return {
    type: TOGGLE_SIDE_BAR_MENU
  }
}

export function toggleAddPostForm() {
  return {
    type: TOGGLE_ADD_POST_FORM
  }
}

export function toggleDeletePostConfirmation(id) {
  return {
    type: TOGGLE_DELETE_POST_CONFIRMATION,
    id
  }
}

// Server calls
export function deletePostRequest(id) {
  const headers = {
    method: "DELETE",
    body: JSON.stringify({
      id
    }),
    headers: {
      'Authorization': 'superSecretKey',
      'Content-Type': 'application/json'
    }
  }
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, headers)
    .then(() => dispatch(deletePost(id)))
  }
}

export function fetchCategories() {
  return function(dispatch) {
    fetch(url+'/categories', {headers})
    .then(res => res.json())
    .then(categories => dispatch(receiveCategories(categories.categories)))
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