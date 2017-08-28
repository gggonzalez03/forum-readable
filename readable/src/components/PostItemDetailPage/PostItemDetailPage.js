import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchPostById,
  deletePost,
  deletePostRequest
} from '../../actions/posts'
import {
  toggleDeletePostConfirmation,
  toggleEditPostForm,
} from '../../actions/forms'
import Timestamp from 'react-timestamp'
import {
  MdFavorite,
  MdFavoriteOutline,
  MdReply,
  MdComment,
} from 'react-icons/lib/md'
import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import Modal from '../Modal/Modal'
import AddPostForm from '../AddPostForm/AddPostForm'
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm'
import './PostItemDetailPage.css'

class PostItemDetailPage extends Component {

  componentWillMount = () => {
    this.props.fetchPostById(this.props.match.params.post_id)
  }

  confirmDelete = (id) => {
    this.props.toggleDeletePostConfirmation(id)
    this.props.deletePost(id)
    this.props.history.goBack()
  }

  openEditPostForm = (id) => {
    this.props.toggleEditPostForm(id)
  }

  render() {
    const post = this.props.post||''
    return (
      <div id="post-item-detail-page">
        <div id="post-item-detail">
          <div id="post-item-container">
          <div className="pid-post-update-button-group">
            <EditButton editButtonCallBack={() => this.openEditPostForm(post.id)}/>
            <DeleteButton deleteButtonCallBack={() => this.props.toggleDeletePostConfirmation(post.id)}/>
          </div>
            <h1 id="pid-post-title">{post && post.title}</h1>
            <div id="pid-user-details">
              <img src="http://via.placeholder.com/50x50" alt={""} id="pid-profile-image" />
              <span id="pid-user-details-right">
                <span id="pid-author-name">{post && post.author}</span>
                <Timestamp style={{fontSize: '.8em'}} time={post && new Date(post.timestamp)}/>
              </span>
            </div>
            <p id="pid-post-body">
              {post && post.body}
            </p>
            <div id="pid-action-icons">
              <MdFavoriteOutline/>
              <MdComment/>
              <MdReply/>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.props.isDeleteConfirmationOpen && post.id === this.props.confirmDeletePostId}
          closeModalCallback={() => this.props.toggleDeletePostConfirmation(post.id)}>
          <DeleteConfirm
            cancelCallback={() => this.props.toggleDeletePostConfirmation(post.id)}
            confirmCallback={() => this.confirmDelete(post.id)}/>
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

const mapStateToProps = ({posts, forms}) => {
  return {
    post: posts.post,
    isDeleteConfirmationOpen: forms.isDeleteConfirmationOpen,
    confirmDeletePostId: forms.confirmDeletePostId,
    isEditPostFormOpen: forms.isEditPostFormOpen,
    editPostFormId: forms.editPostFormId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostById: (id) => dispatch(fetchPostById(id)),
    toggleDeletePostConfirmation: (id) => dispatch(toggleDeletePostConfirmation(id)),
    toggleEditPostForm: (id) => dispatch(toggleEditPostForm(id)),
    deletePost: (id) => dispatch(deletePostRequest(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemDetailPage)