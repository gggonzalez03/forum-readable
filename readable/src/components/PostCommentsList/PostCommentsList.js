import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  toggleDeleteCommentConfirmation,
  toggleEditCommentForm,
} from '../../actions/forms'
import {
  fetchPostComments,
  deletePostComment,
  votePostComment,
} from '../../actions/comments'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import Modal from '../Modal/Modal'
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm'
import VotingCircle from '../VotingCircle/VotingCircle'
import AddCommentForm from '../AddCommentForm/AddCommentForm'

import './PostCommentsList.css'

class PostCommentsList extends Component {

  shouldComponentUpdate = nextProps => {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps)
  } 

  confirmDeleteComment = (comment) => {
    this.props.toggleDeleteCommentConfirmation(comment)
    this.props.deletePostComment(comment.id)
  }

  // This function contains functions to be called in render() that will cause
  // the component to re-render
  // These functions should be assisted by shouldComponentUpdate() react lifecycle
  stateChangersInRender = () => {
    if (this.props.post)
      this.props.fetchPostComments(this.props.post.id)
  }

  render() {
    const post = this.props.post
    const comments = this.props.openedPostComments

    this.stateChangersInRender()

    return (
      <div id="post-item-comments-container">
        {comments && comments.map(comment =>
          <div id="post-item-comment" key={comment.id}>
            <div className="pid-post-update-button-group">
              <EditButton editButtonCallBack={() => this.props.toggleEditCommentForm(comment)} />
              <DeleteButton deleteButtonCallBack={() => this.props.toggleDeleteCommentConfirmation(comment)} />
            </div>
            <div id="pic-comment-details">
              <div id="pic-comment-voting-circle-container">
                <VotingCircle
                  id="pic-comment-voting-circle"
                  voteScore={comment.voteScore}
                  upVoteCallback={() => this.props.votePostComment(comment.id, "upVote")}
                  downVoteCallback={() => this.props.votePostComment(comment.id, "downVote")}
                />
              </div>
              <span id="pic-comment-right">
                <span id="pic-comment-author">{comment.author}</span>
                <span id="pic-comment-comment">{comment.body}</span>
              </span>
            </div>
            <Modal
              isOpen={this.props.isDeleteCommentConfirmationOpen && comment.id === (this.props.editingComment && this.props.editingComment.id)}
              closeModalCallback={() => this.props.toggleDeleteCommentConfirmation(comment)}>
              <DeleteConfirm
                cancelCallback={() => this.props.toggleDeleteCommentConfirmation(comment)}
                confirmCallback={() => this.confirmDeleteComment(comment)} />
            </Modal>
            {this.props.isEditCommentFormOpen && comment.id === (this.props.editingComment && this.props.editingComment.id) && <AddCommentForm post={post} comment={comment} />}
          </div>)}
        {this.props.isEditCommentFormOpen && !this.props.editingComment && <AddCommentForm post={post} />}
      </div>
    )
  }
}

const mapStateToProps = ({ posts, forms, comments }) => {
  return {
    openedPost: posts.openedPost,
    isEditCommentFormOpen: forms.isEditCommentFormOpen,
    editingComment: forms.editingComment,
    openedPostComments: comments.openedPostComments,
    isDeleteCommentConfirmationOpen: forms.isDeleteCommentConfirmationOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostComments: (id) => dispatch(fetchPostComments(id)),
    votePostComment: (id, option) => dispatch(votePostComment(id, option)),
    toggleEditCommentForm: (comment) => dispatch(toggleEditCommentForm(comment)),
    deletePostComment: (id) => dispatch(deletePostComment(id)),
    toggleDeleteCommentConfirmation: (comment) => dispatch(toggleDeleteCommentConfirmation(comment)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostCommentsList))