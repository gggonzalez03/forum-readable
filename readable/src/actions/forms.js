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

export function toggleAddPostForm() {
  return {
    type: TOGGLE_ADD_POST_FORM
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
    type: SUBMIT_POST
  }
}

export function submitEditPost(id) {
  return {
    type: SUBMIT_EDIT_POST,
    id
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
  const headers = {
    method: "POST",
    body: JSON.stringify({
      id: Math.random().toString(36).substr(2, 16),
      timestamp: Date.now(),
      title,
      body,
      author,
      category, 
    }),
    headers: {
      'Authorization': 'superSecretKey',
      'Content-Type': 'application/json'
    }
  }
  return function(dispatch) {
    fetch(`${url}/posts`, headers)
    .then(() => dispatch(submitPost()))
  }
}

export function initializeEditPostFieldValuesRequest(id) {
  const headers = {
    method: "GET",
    headers: {
      'Authorization': 'superSecretKey',
      'Content-Type': 'application/json'
    }
  }
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, headers)
    .then(res => res.json())
    .then(post => dispatch(initializeEditPostFieldValues(post.id, post.title, post.body, post.author, post.category)))
  }
}

export function submitEditPostRequest(id, title, body) {
  const headers = {
    method: "PUT",
    body: JSON.stringify({
      title,
      body, 
    }),
    headers: {
      'Authorization': 'superSecretKey',
      'Content-Type': 'application/json'
    }
  }
  return function(dispatch) {
    fetch(`${url}/posts/${id}`, headers)
    .then((e) => dispatch(submitEditPost(id)))
  }
}
