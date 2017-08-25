export const TOGGLE_ADD_POST_FORM = 'TOGGLE_ADD_POST_FORMS'
export const TOGGLE_EDIT_POST_FORM = 'TOGGLE_EDIT_POST_FORM'
export const EDIT_POST_TITLE = 'EDIT_POST_TITLE'
export const EDIT_POST_BODY = 'EDIT_POST_BODY'
export const EDIT_POST_USERNAME = 'EDIT_POST_USERNAME'
export const EDIT_POST_CATEGORY = 'EDIT_POST_CATEGORY'
export const SUBMIT_POST = 'SUBMIT_POST'
export const SUBMIT_EDIT_POST = 'SUBMIT_EDIT_POST'
export const INITIALIZE_EDIT_POST_FIELD_VALUES = 'INITIALIZE_EDIT_POST_FIELD_VALUES'

// Confirmation Modals
export const TOGGLE_DELETE_POST_CONFIRMATION = 'TOGGLE_DELETE_POST_CONFIRMATION'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey',
  'Content-Type': 'application/json'
}

export function toggleAddPostForm() {
  return {
    type: TOGGLE_ADD_POST_FORM,
    editPostTitle: "",
    editPostBody: "",
    editPostUsername: "",
    editPostCategory: ""
  }
}

export function toggleEditPostForm(id) {
  return {
    type: TOGGLE_EDIT_POST_FORM,
    id
  }
}

export function editPostTitle (title) {
  return {
    type: EDIT_POST_TITLE,
    title
  }
}

export function editPostBody (body) {
  return {
    type: EDIT_POST_BODY,
    body
  }
}

export function editPostUsername (username) {
  return {
    type: EDIT_POST_USERNAME,
    username
  }
}

export function editPostCategory (category) {
  return {
    type: EDIT_POST_CATEGORY,
    category
  }
}

export function submitPost () {
  return {
    type: SUBMIT_POST,
    editPostTitle: "",
    editPostBody: "",
    editPostUsername: "",
    editPostCategory: ""
  }
}

export function submitEditPost(id) {
  return {
    type: SUBMIT_EDIT_POST,
    id,
    editPostTitle: "",
    editPostBody: "",
    editPostUsername: "",
    editPostCategory: ""
  }
}

export function initializeEditPostFieldValues(id, title, body, username, category) {
  return {
    type: INITIALIZE_EDIT_POST_FIELD_VALUES,
    id,
    title,
    body,
    username,
    category
  }
}

// Confirmation Modals
export function toggleDeletePostConfirmation(id) {
  return {
    type: TOGGLE_DELETE_POST_CONFIRMATION,
    id
  }
}

// Asynchronous requests
export function submitPostRequest(title, body, author, category) {
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
    .then(() => dispatch(submitPost()))
  }
}

export function initializeEditPostFieldValuesRequest(id) {
  const method = 'GET'
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, {method, headers})
    .then(res => res.json())
    .then(post => dispatch(initializeEditPostFieldValues(post.id, post.title, post.body, post.author, post.category)))
  }
}

export function submitEditPostRequest(id, title, body) {

  const method = 'PUT'
  const requestBody = JSON.stringify({
    title,
    body, 
  })
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, {method, body:requestBody, headers})
    .then((e) => dispatch(submitEditPost(id)))
  }
}
