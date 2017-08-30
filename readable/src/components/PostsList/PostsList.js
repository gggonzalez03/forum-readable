import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import { withRouter } from 'react-router-dom'
import {
  fetchAllPosts,
  fetchCategoryPosts,
} from '../../actions/posts'
import { connect } from 'react-redux'

import './PostsList.css'

class PostsList extends Component {
  componentDidMount = () => {
    this.fetchPosts(this.props.match.params.category)
  }
  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }
  render() {
    return (
      <div id="posts-list">
        {this.props.showingPosts && this.props.showingPosts.map((post) =>
          <PostItem
            key={post.id}
            post={post}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({posts, categories}) => {
  return {
    showingPosts: posts.showingPosts,
    selectedCategory: categories.selectedCategory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsList));