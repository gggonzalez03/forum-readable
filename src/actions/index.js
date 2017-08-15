export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

const url = 'http://localhost:5001'

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}

export function fetchCategories() {
  return function(dispatch) {
    fetch(url+'/categories', {headers:{'Authorization': 'superSecretKey'}})
    .then(res => res.json())
    .then(categories => dispatch(receiveCategories(categories.categories)))
  }
}