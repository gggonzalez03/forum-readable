export const TOGGLE_ADD_POST_FORM = 'TOGGLE_ADD_POST_FORMS'
export const EDIT_POST_TITLE = 'EDIT_POST_TITLE'
export const EDIT_POST_BODY = 'EDIT_POST_BODY'
export const EDIT_POST_USERNAME = 'EDIT_POST_USERNAME'
export const EDIT_POST_CATEGORY = 'EDIT_POST_CATEGORY'
export const SUBMIT_POST = 'SUBMIT_POST'

// Confirmation Modals
export const TOGGLE_DELETE_POST_CONFIRMATION = 'TOGGLE_DELETE_POST_CONFIRMATION'

const url = 'http://localhost:5001'

export function toggleAddPostForm() {
  return {
    type: TOGGLE_ADD_POST_FORM
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
