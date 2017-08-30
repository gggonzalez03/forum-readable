export const TOGGLE_ADD_POST_FORM = 'TOGGLE_ADD_POST_FORMS'
export const TOGGLE_EDIT_POST_FORM = 'TOGGLE_EDIT_POST_FORM'
export const EDIT_POST_TITLE = 'EDIT_POST_TITLE'
export const EDIT_POST_BODY = 'EDIT_POST_BODY'
export const EDIT_POST_USERNAME = 'EDIT_POST_USERNAME'
export const EDIT_POST_CATEGORY = 'EDIT_POST_CATEGORY'

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
    editPostCategory: "",
  }
}

export function toggleEditPostForm(post) {
  if (!post) {
    return {
      type: TOGGLE_EDIT_POST_FORM,
      id: '',
      title: '',
      body: '',
      username: '',
      category: '',
      editingPost: '',
    }
  }
  return {
    type: TOGGLE_EDIT_POST_FORM,
    id: post.id,
    title: post.title,
    body: post.body,
    username: post.username,
    category: post.category,
    editingPost: post,
  }
}

export function editPostTitle(title) {
  return {
    type: EDIT_POST_TITLE,
    title
  }
}

export function editPostBody(body) {
  return {
    type: EDIT_POST_BODY,
    body
  }
}

export function editPostUsername(username) {
  return {
    type: EDIT_POST_USERNAME,
    username
  }
}

export function editPostCategory(category) {
  return {
    type: EDIT_POST_CATEGORY,
    category
  }
}

// Confirmation Modals
export function toggleDeletePostConfirmation(post) {
  return {
    type: TOGGLE_DELETE_POST_CONFIRMATION,
    post
  }
}

// Asynchronous requests
export function toggleEditPostFormRequest(id) {
  if(id){
    const method = 'GET'
    return function(dispatch) {
      fetch(`${url}/posts/${id}`, {method, headers})
      .then(res => res.json())
      .then(post => dispatch(toggleEditPostForm(post)))
    }
  }
  else {
    return function(dispatch) {
      dispatch(toggleEditPostForm("", "", "", "", ""))
    }
  }
}