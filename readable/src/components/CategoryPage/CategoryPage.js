import React, { Component } from 'react'
import CategoryPostsHeader from '../CategoryPostsHeader/CategoryPostsHeader'
import PostsList from '../PostsList/PostsList'
import { connect } from 'react-redux'
import {
  fetchAllPosts, fetchCategoryPosts
} from '../../actions/posts'
import './CategoryPage.css'

class CategoryPage extends Component {
  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }
  render() {
    const selectedCategory = this.props.match.params.category
    this.fetchPosts(selectedCategory)
    return (
      <div id="category-page">
        <PostsList id="posts-list"/>
      </div>
    )
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);