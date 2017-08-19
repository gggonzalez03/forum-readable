export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

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