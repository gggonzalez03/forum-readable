export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

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

// Asynchronous requests
export function fetchCategories() {
  return function(dispatch) {
    fetch(url+'/categories', {headers})
    .then(res => res.json())
    .then(categories => dispatch(receiveCategories(categories.categories)))
  }
}