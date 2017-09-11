import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  deletePost,
  voteForPost,
  populatePostWithComments
} from '../../actions/posts'
import {
  toggleDeletePostConfirmation,
  toggleEditPostForm,
} from '../../actions/forms'
import Modal from '../Modal/Modal'
import AddPostForm from '../AddPostForm/AddPostForm'
import './PostItem.css'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm'
import VotingCircle from '../VotingCircle/VotingCircle'

class PostItem extends Component {

  componentWillMount = () => {
    this.props.populatePostWithComments(this.props.post)
  }

  confirmDelete = (post) => {
    this.props.toggleDeletePostConfirmation(post)
    this.props.deletePost(post.id)
  }

  render() {
    const { post } = this.props
    return (
      <div className="post-item">
        <div className="post-update-button-group">
          <EditButton editButtonCallBack={() => this.props.toggleEditPostForm(post)} />
          <DeleteButton deleteButtonCallBack={() => this.props.toggleDeletePostConfirmation(post)} />
        </div>
        <div className="post-vote-info-block">
          <div className="post-vote-function">
            <VotingCircle
              id="pid-voting-circle"
              voteScore={post.voteScore}
              upVoteCallback={() => this.props.voteForPost(post.id, "upVote")}
              downVoteCallback={() => this.props.voteForPost(post.id, "downVote")}
            />
          </div>
          <div className="post-info">
            <Link to={`/${post.category}/${post.id}`} className="post-title"><h3>{post.title}</h3></Link>
            <span className="post-detail">
              <span>Posted by: </span>
              <span className="post-author">{post.author}</span>
              <span className="dot-separator">&#9679;</span>
              <span>{post.comments && post.comments.length} comments</span>
            </span>
          </div>
        </div>
        <Modal
          isOpen={this.props.isDeleteConfirmationOpen && post.id === this.props.editingPost.id}
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

const mapStateToProps = ({ forms, posts }) => {
  return {
    isDeleteConfirmationOpen: forms.isDeleteConfirmationOpen,
    isEditPostFormOpen: forms.isEditPostFormOpen,
    editingPost: forms.editingPost,
    showingPosts: posts.showingPosts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    toggleDeletePostConfirmation: (id) => dispatch(toggleDeletePostConfirmation(id)),
    toggleEditPostForm: (post) => dispatch(toggleEditPostForm(post)),
    voteForPost: (id, option) => dispatch(voteForPost(id, option)),
    populatePostWithComments: (id) => dispatch(populatePostWithComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);