import React, { Component } from 'react'
import './PostsList.css'
import {
  MdDelete,
  MdEdit,
  MdArrowDropUp,
  MdArrowDropDown,
  MdPerson
} from 'react-icons/lib/md'

class PostsList extends Component {
  render() {
    return (
      <div id="posts-list">
        <div className="post-item">
          <div className="post-update-button-group">
            <MdEdit className="post-update-button"/>
            <MdDelete className="post-update-button"/>
          </div>
          <div className="post-vote-info-block">
            <div className="post-vote-function">
              <div className="post-vote-button-group">
                <MdArrowDropUp className="post-vote-button"/>
                <span>12</span>
                <MdArrowDropDown className="post-vote-button"/>
              </div>
            </div>
            <div className="post-info">
              <h3 className="post-title">This is the the titleThThis is the the titleThis is the the title</h3>
              <span className="post-detail">
                <span>Posted by: </span>
                <MdPerson className="profile-image"/>
                {/* <img src="http://via.placeholder.com/20x20" alt="Name Profile" className="profile-image" /> */}
                <span className="dot-separator">&#9679;</span>
                <span>17 comments</span>
              </span>
            </div>
          </div>
        </div>
        <div className="post-item">
          <div className="post-update-button-group">
            <MdEdit className="post-update-button"/>
            <MdDelete className="post-update-button"/>
          </div>
          <div className="post-vote-info-block">
            <div className="post-vote-function">
              <div className="post-vote-button-group">
                <MdArrowDropUp className="post-vote-button"/>
                <span>12</span>
                <MdArrowDropDown className="post-vote-button"/>
              </div>
            </div>
            <div className="post-info">
              <h3 className="post-title">This is the the titleThThis is the the titleThis is the the title</h3>
              <span className="post-detail">
                <span>Posted by: </span>
                <MdPerson className="profile-image"/>
                {/* <img src="http://via.placeholder.com/20x20" alt="Name Profile" className="profile-image" /> */}
                <span className="dot-separator">&#9679;</span>
                <span>17 comments</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostsList