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

  confirmDeleteComment = (comment) => {
    this.props.toggleDeleteCommentConfirmation(comment)
    this.props.deletePostComment(comment.id)
  }

  render() {
    const post = this.props.post

    if(post && post.comments)
      return (
        <div id="post-item-comments-container">
          {post.comments.map(comment =>
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
                isOpen={this.props.isDeleteCommentConfirmationOpen && comment.id === (this.props.editCommentForm && this.props.editCommentForm.editCommentId)}
                closeModalCallback={() => this.props.toggleDeleteCommentConfirmation(comment)}>
                <DeleteConfirm
                  cancelCallback={() => this.props.toggleDeleteCommentConfirmation(comment)}
                  confirmCallback={() => this.confirmDeleteComment(comment)} />
              </Modal>
              {this.props.isEditCommentFormOpen && comment.id === (this.props.editCommentForm && this.props.editCommentForm.editCommentId) && <AddCommentForm post={post} comment={comment} />}
            </div>)}
          {this.props.isEditCommentFormOpen && !this.props.editCommentForm.editCommentId && <AddCommentForm post={post} />}
        </div>
      )
    else
      return <div></div>
  }
}

const mapStateToProps = ({ posts, forms, comments }) => {
  return {
    isEditCommentFormOpen: forms.isEditCommentFormOpen,
    editCommentForm: forms.editCommentForm,
    isDeleteCommentConfirmationOpen: forms.isDeleteCommentConfirmationOpen,
    showingPosts: posts.showingPosts,
    comments: comments.comments,
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