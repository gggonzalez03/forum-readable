import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../../actions'

import './PostsList.css'

class PostsList extends Component {
  componentWillMount = () => {
    this.props.fetchAllPosts()
  }
  render() {
    return (
      <div id="posts-list">
        {this.props.posts && this.props.posts.map((post) =>
          <PostItem
            key={post.id}
            post={post}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);