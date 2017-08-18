import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import SideBar from '../SideBar/SideBar'

import './PostsList.css'

class PostsList extends Component {
  render() {
    return (
      <div>
        <SideBar>
          <h3>Header Title</h3>
          <hr/>
        </SideBar>
        <div id="posts-list">
          <PostItem/>
          <PostItem/>
        </div>
      </div>
    )
  }
}

export default PostsList