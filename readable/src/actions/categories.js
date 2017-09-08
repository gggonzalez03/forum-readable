import * as api from './api'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SELECT_CATEGORY =  'SELECT_CATEGORY'

const url = 'http://localhost:5001'
const headers = {
  'Authorization': 'superSecretKey'
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
    api.fetchCategoriesRequest()
    .then(categories => dispatch(
      {
        type: RECEIVE_CATEGORIES,
        categories: categories.categories,
      }
    ))
  }
}