import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import SideBar from '../SideBar/SideBar'

import './PostsList.css'

class PostsList extends Component {
  render() {
    return (
      <div>
        <SideBar>
          <div id="side-bar-menu-content">
            <div className="side-bar-section" id="side-bar-header">
              <img id="profile-image" src="http://via.placeholder.com/100x100" alt="Name" />
              <h3 className="user-name">Anonymous</h3>
              <hr/>
            </div>
            <div className="side-bar-section" id="side-bar-body">
              <p className="menu-item">All</p>
              <p className="menu-item">React</p>
              <p className="menu-item">Redux</p>
              <p className="menu-item">Udacity</p>
            </div>
            <div className="side-bar-section" id="side-bar-footer">
              <p className="menu-item" id="menu-item-logout">Logout</p>
            </div>
          </div>
        </SideBar>
        <div id="posts-list">
          <PostItem />
          <PostItem />
        </div>
      </div>
    )
  }
}

export default PostsList