import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'

import './PostsList.css'

class PostsList extends Component {
  render() {
    return (
      <div id="posts-list">
        <PostItem/>
        <PostItem/>
      </div>
    )
  }
}

export default PostsList