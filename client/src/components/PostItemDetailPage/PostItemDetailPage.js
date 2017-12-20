import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  deletePost,
  voteForPost,
  fetchAllPosts,
  fetchCategoryPosts,
} from '../../actions/posts'
import {
  toggleDeletePostConfirmation,
  toggleEditPostForm,
  toggleEditCommentForm,
  toggleAddCommentForm,
} from '../../actions/forms'
import {
  fetchPostComments
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
import PostCommentsList from '../PostCommentsList/PostCommentsList'

import './PostItemDetailPage.css'

class PostItemDetailPage extends Component {

  componentWillMount = () => {
    // Fetch posts if shwoingPosts is empty to make sure
    // this component renders correctly
    if (!this.props.showingPosts || !this.props.showingPosts.length)
      this.fetchPosts()
  }

  fetchPosts = (category) => {
    category ?
      this.props.fetchCategoryPosts(category) :
      this.props.fetchAllPosts()
  }

  confirmDelete = (post) => {
    this.props.toggleDeletePostConfirmation(undefined)
    this.props.deletePost(post.id)
    this.props.history.push(`/${post.category}`)
  }

  render() {
    let post = this.props.showingPosts && this.props.showingPosts.filter(post => post.id === this.props.match.params.post_id)[0]

    // Populate the post's comments if there's none
    if (post && !post.hasOwnProperty('comments'))
      this.props.fetchPostComments(post.id)
    if (post)
      post.comments = this.props.comments && this.props.comments[post.id]
    
    // Only render component if post is defined and also its comments
    if (post && post.comments)
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
                    voteScore={post && post.voteScore}
                    upVoteCallback={() => this.props.voteForPost(post && post.id, "upVote")}
                    downVoteCallback={() => this.props.voteForPost(post && post.id, "downVote")}
                  />
                </div>
              </div>
              <p id="pid-post-body">
                {post && post.body}
              </p>
              <div id="pid-action-icons">
                <MdReply
                  onClick={() => this.props.toggleAddCommentForm()}
                />
                <span>{post.comments && post.comments.length} comments</span>
              </div>
            </div>
            <PostCommentsList post={post} />
          </div>
          <Modal
            isOpen={this.props.isDeleteConfirmationOpen}
            closeModalCallback={() => this.props.toggleDeletePostConfirmation(undefined)}>
            <DeleteConfirm
              cancelCallback={() => this.props.toggleDeletePostConfirmation(undefined)}
              confirmCallback={() => this.confirmDelete(post)} />
          </Modal>
          <Modal
            isOpen={this.props.isEditPostFormOpen && post.id === this.props.editPostForm.editPostId}
            closeModalCallback={() => this.props.toggleEditPostForm(undefined)}>
            <AddPostForm id={post && post.id} />
          </Modal>
        </div>
      )
    else
      return <div></div>
  }
}

const mapStateToProps = ({ posts, forms, comments }) => {
  return {
    isDeleteConfirmationOpen: forms.isDeleteConfirmationOpen,
    isEditPostFormOpen: forms.isEditPostFormOpen,
    editPostForm: forms.editPostForm,
    showingPosts: posts.showingPosts,
    comments: comments.comments,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    toggleDeletePostConfirmation: (id) => dispatch(toggleDeletePostConfirmation(id)),
    toggleEditPostForm: (post) => dispatch(toggleEditPostForm(post)),
    voteForPost: (id, option) => dispatch(voteForPost(id, option)),
    toggleEditCommentForm: (comment) => dispatch(toggleEditCommentForm(comment)),
    toggleAddCommentForm: () => dispatch(toggleAddCommentForm()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
    fetchPostComments: (id) => dispatch(fetchPostComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemDetailPage)