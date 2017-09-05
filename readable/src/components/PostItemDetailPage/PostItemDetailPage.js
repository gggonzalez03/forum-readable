import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  deletePostRequest,
  openPostRequest,
  voteRequest,
} from '../../actions/posts'
import {
  toggleDeletePostConfirmation,
  toggleDeleteCommentConfirmation,
  toggleEditPostForm,
  toggleEditCommentForm,
} from '../../actions/forms'
import {
  fetchCommentsByPostId,
  deleteCommentByIdRequest,
  voteCommentRequest,
} from '../../actions/comments'
import Timestamp from 'react-timestamp'
import {
  MdReply,
} from 'react-icons/lib/md'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import Modal from '../Modal/Modal'
import AddPostForm from '../AddPostForm/AddPostForm'
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm'
import VotingCircle from '../VotingCircle/VotingCircle'
import AddCommentForm from '../AddCommentForm/AddCommentForm'

import './PostItemDetailPage.css'

class PostItemDetailPage extends Component {

  componentWillMount = () => {
    this.props.openPostRequest(this.props.match.params.post_id)
    this.props.fetchCommentsByPostId(this.props.match.params.post_id)
  }

  confirmDelete = (post) => {
    this.props.toggleDeletePostConfirmation(post)
    this.props.deletePostRequest(post.id)
    this.props.history.goBack()
  }

  confirmDeleteComment = (comment) => {
    this.props.toggleDeleteCommentConfirmation(comment)
    this.props.deleteCommentByIdRequest(comment.id)
  }

  render() {
    const post = this.props.openedPost
    const comments = this.props.openedPostComments
    return (
      <div id="post-item-detail-page">
        <div id="post-item-detail">
          <div id="post-item-container">
            <div className="pid-post-update-button-group">
              <EditButton editButtonCallBack={() => this.props.toggleEditPostForm(post)} />
              <DeleteButton deleteButtonCallBack={() => this.props.toggleDeletePostConfirmation(post)} />
            </div>
            <h1 id="pid-post-title">{post && post.title}</h1>
            <div id="pid-user-details">
              <img src="http://via.placeholder.com/50x50" alt={""} id="pid-profile-image" />
              <span id="pid-user-details-right">
                <span id="pid-author-name">{post && post.author}</span>
                <Timestamp style={{ fontSize: '.8em' }} time={post && `${post.timestamp}`} />
              </span>
              <div id="pid-voting-circle-container">
                <VotingCircle
                  id="pid-voting-circle"
                  voteScore={post.voteScore}
                  upVoteCallback={() => this.props.voteRequest(post.id, "upVote")}
                  downVoteCallback={() => this.props.voteRequest(post.id, "downVote")}
                />
              </div>
            </div>
            <p id="pid-post-body">
              {post && post.body}
            </p>
            <div id="pid-action-icons">
              <MdReply
                onClick={() => this.props.toggleEditCommentForm()}
              />
            </div>
          </div>
          {/* Comments section */}
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
                      upVoteCallback={() => this.props.voteCommentRequest(comment.id, "upVote")}
                      downVoteCallback={() => this.props.voteCommentRequest(comment.id, "downVote")}
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
        </div>
        <Modal
          isOpen={this.props.isDeleteConfirmationOpen}
          closeModalCallback={() => this.props.toggleDeletePostConfirmation(post)}>
          <DeleteConfirm
            cancelCallback={() => this.props.toggleDeletePostConfirmation(post)}
            confirmCallback={() => this.confirmDelete(post)} />
        </Modal>
        <Modal
          isOpen={this.props.isEditPostFormOpen && post.id === this.props.editingPost.id}
          closeModalCallback={() => this.props.toggleEditPostForm(undefined)}>
          <AddPostForm id={post.id} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ posts, forms, comments }) => {
  return {
    openedPost: posts.openedPost,
    isEditCommentFormOpen: forms.isEditCommentFormOpen,
    isDeleteConfirmationOpen: forms.isDeleteConfirmationOpen,
    isEditPostFormOpen: forms.isEditPostFormOpen,
    editingPost: forms.editingPost,
    editingComment: forms.editingComment,
    openedPostComments: comments.openedPostComments,
    isDeleteCommentConfirmationOpen: forms.isDeleteCommentConfirmationOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openPostRequest: (id) => dispatch(openPostRequest(id)),
    deletePostRequest: (id) => dispatch(deletePostRequest(id)),
    toggleDeletePostConfirmation: (id) => dispatch(toggleDeletePostConfirmation(id)),
    toggleEditPostForm: (post) => dispatch(toggleEditPostForm(post)),
    fetchCommentsByPostId: (id) => dispatch(fetchCommentsByPostId(id)),
    voteRequest: (id, option) => dispatch(voteRequest(id, option)),
    voteCommentRequest: (id, option) => dispatch(voteCommentRequest(id, option)),
    toggleEditCommentForm: (comment) => dispatch(toggleEditCommentForm(comment)),
    deleteCommentByIdRequest: (id) => dispatch(deleteCommentByIdRequest(id)),
    toggleDeleteCommentConfirmation: (comment) => dispatch(toggleDeleteCommentConfirmation(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemDetailPage)