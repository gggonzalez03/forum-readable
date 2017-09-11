import * as api from './api'
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
export const POPULATE_POST_WITH_COMMENTS = 'POPULATE_POST_WITH_COMMENTS'

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

// Asynchronous requests
export function addPost(title, body, author, category) {
  return function(dispatch) {
    api.addPostRequest(title, body, author, category)
    .then(post => api.fetchPostByIdRequest(post.id))
    .then(post => dispatch(
      {
        type: ADD_POST,
        post
      }
    ))
  }
}

export function editPost(id, title, body) {
  return function(dispatch) {
    api.editPostRequest(id, title, body)
    .then(post => api.fetchPostByIdRequest(post.id))
    .then(post => dispatch(
      {
        type: EDIT_POST,
        editedPost: post,
      }
    ))
  }
}

export function openPost(id) {
  return function(dispatch) {
    api.fetchPostByIdRequest(id)
    .then(post => dispatch(
      {
        type: OPEN_POST,
        post
      }
    ))
  }
}

export function deletePost(id) {
  return function(dispatch) {
    api.deletePostRequest(id)
    .then(() => dispatch(
      {
        type: DELETE_POST,
        id
      }
    ))
  }
}

export function fetchAllPosts() {
  return function(dispatch) {
    api.fetchAllPostsRequest()
    .then(posts => dispatch(
      {
        type: RECEIVE_ALL_POSTS,
        posts,
        category: '',
      }
    ))

    dispatch(selectCategory(''))
  }
}

export function fetchCategoryPosts(category) {
  return function(dispatch) {
    api.fetchCategoryPosts(category)
    .then(posts => dispatch(
      {
        type: RECEIVE_CATEGORY_POSTS,
        posts: posts,
        category: category
      }
    ))
    dispatch(selectCategory(category))
  }
}

export function voteForPost(id, option) {
  return function(dispatch) {
    api.voteForPostRequest(id, option)
    .then((post) => dispatch(
      {
        type: VOTE,
        id: post.id,
        voteScore: post.voteScore,
      }
    ))
  }
}

export function populatePostWithComments(post) {
  return function(dispatch) {
    api.fetchPostCommentsRequest(post.id)
    .then(comments => dispatch({
      type: POPULATE_POST_WITH_COMMENTS,
      post: post,
      comments: comments,
    }))
  }
}