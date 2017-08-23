import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import { connect } from 'react-redux'

import './PostsList.css'

class PostsList extends Component {
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

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts
  }
}

export default connect(mapStateToProps)(PostsList);