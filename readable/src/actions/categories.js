export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SELECT_CATEGORY =  'SELECT_CATEGORY'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey'
}

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
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