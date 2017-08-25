import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  deletePostRequest,
} from '../../actions/posts'
import {
  toggleDeletePostConfirmation,
  toggleEditPostForm,
} from '../../actions/forms'
import Modal from '../Modal/Modal'
import AddPostForm from '../AddPostForm/AddPostForm'
import './PostItem.css'
import {
  MdDelete,
  MdEdit,
  MdArrowDropUp,
  MdArrowDropDown,
  MdClear
  // MdPerson
} from 'react-icons/lib/md'

class PostItem extends Component {
  confirmDelete = (id) => {
    this.props.toggleDeletePostConfirmation(id)
    this.props.deletePost(id)
  }

  openEditPostForm = (id) => {
    this.props.toggleEditPostForm(id)
  }
  render() {
    const { post } = this.props
    return (
      <div className="post-item">
        <div className="post-update-button-group">
          <MdEdit className="post-update-button" onClick={() => this.openEditPostForm(post.id)}/>
          <MdDelete className="post-update-button" onClick={() => this.props.toggleDeletePostConfirmation(post.id)}/>
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
        <Modal
          isOpen={this.props.isDeleteConfirmationOpen && post.id === this.props.confirmDeletePostId}
          closeModalCallback={() => this.props.toggleDeletePostConfirmation(post.id)}>
          <div id="confirm-delete-popup">
            <MdClear id="confirm-exit-popup"
              onClick={() => this.props.toggleDeletePostConfirmation(post.id)}/>
            <span id="confirm-message">Are you sure you want to delete this post?</span>
            <div id="confirm-action-buttons">
              <span id="confirm-cancel"
                onClick={() => this.props.toggleDeletePostConfirmation(post.id)}>Cancel</span>
              <span id="confirm-delete"
                onClick={() => this.confirmDelete(post.id)}>Delete</span>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={this.props.isEditPostFormOpen && post.id === this.props.editPostFormId}
          closeModalCallback={() => this.props.toggleEditPostForm(post.id)}>
          <AddPostForm id={post.id} editMode={true} selectedCategory={post.category}/>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({forms, posts}) => {
  return {
    isDeleteConfirmationOpen: forms.isDeleteConfirmationOpen,
    confirmDeletePostId: forms.confirmDeletePostId,
    isEditPostFormOpen: forms.isEditPostFormOpen,
    editPostFormId: forms.editPostFormId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id) => dispatch(deletePostRequest(id)),
    toggleDeletePostConfirmation: (id) => dispatch(toggleDeletePostConfirmation(id)),
    toggleEditPostForm: (id) => dispatch(toggleEditPostForm(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);