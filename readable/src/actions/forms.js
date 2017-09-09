import * as api from './api'
export const TOGGLE_ADD_POST_FORM = 'TOGGLE_ADD_POST_FORMS'
export const TOGGLE_EDIT_POST_FORM = 'TOGGLE_EDIT_POST_FORM'
export const EDIT_POST_TITLE = 'EDIT_POST_TITLE'
export const EDIT_POST_BODY = 'EDIT_POST_BODY'
export const EDIT_POST_USERNAME = 'EDIT_POST_USERNAME'
export const EDIT_POST_CATEGORY = 'EDIT_POST_CATEGORY'
export const EDIT_COMMENT_AUTHOR = 'EDIT_COMMENT_AUTHOR'
export const EDIT_COMMENT_BODY = 'EDIT_COMMENT_BODY'
export const TOGGLE_ADD_COMMENT_FORM = 'TOGGLE_ADD_COMMENT_FORM'
export const TOGGLE_DELETE_COMMENT_CONFIRMATION = 'TOGGLE_DELETE_COMMENT_CONFIRMATION'

// Confirmation Modals
export const TOGGLE_DELETE_POST_CONFIRMATION = 'TOGGLE_DELETE_POST_CONFIRMATION'

export function toggleAddPostForm() {
  return {
    type: TOGGLE_ADD_POST_FORM,
    editPostTitle: "",
    editPostBody: "",
    editPostUsername: "",
    editPostCategory: "",
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

export function toggleEditCommentForm(comment) {
  return {
    type: TOGGLE_ADD_COMMENT_FORM,
    comment: comment||undefined
  }
}

export function editCommentAuthor(author) {
  return {
    type: EDIT_COMMENT_AUTHOR,
    author
  }
}

export function editCommentBody(body) {
  return {
    type: EDIT_COMMENT_BODY,
    body
  }
}

// Confirmation Modals
export function toggleDeletePostConfirmation(post) {
  return {
    type: TOGGLE_DELETE_POST_CONFIRMATION,
    post
  }
}

export function toggleDeleteCommentConfirmation(comment) {
  return {
    type: TOGGLE_DELETE_COMMENT_CONFIRMATION,
    comment
  }
}

// Asynchronous requests
export function toggleEditPostForm(post) {
  if(post){
    return function(dispatch) {
      api.toggleEditPostFormRequest(post.id)
      .then(post => dispatch(
        {
          type: TOGGLE_EDIT_POST_FORM,
          id: post.id,
          title: post.title,
          body: post.body,
          username: post.username,
          category: post.category,
          editingPost: post,
        }
      ))
    }
  }
  else {
    return function(dispatch) {
      dispatch(
        {
          type: TOGGLE_EDIT_POST_FORM,
          id: '',
          title: '',
          body: '',
          username: '',
          category: '',
          editingPost: '',
        }
      )
    }
  }
}