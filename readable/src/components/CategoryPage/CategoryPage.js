import React, { Component } from 'react'
import PostsList from '../PostsList/PostsList'
import { connect } from 'react-redux'
import {
  fetchAllPosts,
  fetchCategoryPosts,
} from '../../actions/posts'
import './CategoryPage.css'

class CategoryPage extends Component {

  componentWillMount = () => {
    this.fetchPosts(this.props.match.params.category)
  }

  componentDidUpdate = prevProps => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchPosts(this.props.match.params.category)
    }
  }

  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }

  render() {
    return (
      <div id="category-page">
        <PostsList id="posts-list" showingPosts={this.props.showingPosts}/>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    showingPosts: posts.showingPosts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)