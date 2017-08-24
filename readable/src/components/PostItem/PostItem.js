import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePostRequest } from '../../actions'
import './PostItem.css'
import {
  MdDelete,
  MdEdit,
  MdArrowDropUp,
  MdArrowDropDown,
  // MdPerson
} from 'react-icons/lib/md'

class PostItem extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="post-item">
        <div className="post-update-button-group">
          <MdEdit className="post-update-button" />
          <MdDelete className="post-update-button" onClick={() => this.props.deletePost(post.id)}/>
        </div>
        <div className="post-vote-info-block">
          <div className="post-vote-function">
            <div className="post-vote-button-group">
              <MdArrowDropUp className="post-vote-button" />
              <span>{post.voteScore}</span>
              <MdArrowDropDown className="post-vote-button" />
            </div>
          </div>
          <div className="post-info">
            <h3 className="post-title">{post.title}</h3>
            <span className="post-detail">
              <span>Posted by: </span>
              {/* <MdPerson className="profile-image" /> */}
              <img src="http://via.placeholder.com/20x20" alt={post.author} className="profile-image" />
              <span className="dot-separator">&#9679;</span>
              <span>17 comments</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id) => dispatch(deletePostRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);