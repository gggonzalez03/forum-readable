import {
  RECEIVE_ALL_POSTS,
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POST_BY_ID,
  DELETE_POST,
  ADD_POST,
  EDIT_POST,
  OPEN_POST,
  SORT_POSTS,
  VOTE,
  POPULATE_POST_WITH_COMMENTS
} from '../actions/posts'

import initialState from './initialState'

export default function posts(state=initialState.posts, action) {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        showingPosts: [...state.showingPosts, action.post]
      }
    case EDIT_POST:
      return {
        ...state,
        showingPosts: state.showingPosts.map(post => {
          if (post.id === action.editedPost.id)
            return action.editedPost
          return post
        }),
        openedPost: action.editedPost,
      }
    case OPEN_POST:
      return {
        ...state,
        openedPost: action.post,
      }
    case RECEIVE_ALL_POSTS:
      return {
        ...state,
        showingPosts: action.posts.filter((post) => post.deleted !== true),
        selectedCategory: action.category,
      }
    case POPULATE_POST_WITH_COMMENTS:
      return {
        ...state,
        showingPosts: state.showingPosts.map(post => {
          if (post.id === action.post.id){
            post.comments = action.comments
          }
          return post
        })
      }
    case RECEIVE_CATEGORY_POSTS:
      return {
        ...state,
        showingPosts: action.posts,
        selectedCategory: action.category
      }
    case RECEIVE_POST_BY_ID:
      return {
        ...state,
        openedPost: action.post
      }
    case DELETE_POST:
      return {
        ...state,
        showingPosts: state.showingPosts.filter((post) => post.id !== action.id)
      }
    case SORT_POSTS:
      return {
        ...state,
        showingPosts: [...state.showingPosts].sort(action.comparer),
        sortOrder: action.sortOrder,
        sortBy: action.sortBy,
      }
    case VOTE:
      return {
        ...state,
        showingPosts: state.showingPosts.map((post) => {
          if (post.id === action.id)
            post.voteScore = action.voteScore
          return post
        })
      }
    default:
      return state
  }
}