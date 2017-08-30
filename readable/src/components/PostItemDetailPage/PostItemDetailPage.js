import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  deletePostRequest,
  openPostRequest,
} from '../../actions/posts'
import {
  toggleDeletePostConfirmation,
  toggleEditPostForm,
} from '../../actions/forms'
import Timestamp from 'react-timestamp'
import {
  //MdFavorite,
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
    this.props.openPostRequest(this.props.match.params.post_id)
  }

  confirmDelete = (post) => {
    this.props.toggleDeletePostConfirmation(post)
    this.props.deletePostRequest(post.id)
    this.props.history.goBack()
  }

  render() {
    const post = this.props.openedPost
    return (
      <div id="post-item-detail-page">
        <div id="post-item-detail">
          <div id="post-item-container">
          <div className="pid-post-update-button-group">
            <EditButton editButtonCallBack={() => this.props.toggleEditPostForm(post)}/>
            <DeleteButton deleteButtonCallBack={() => this.props.toggleDeletePostConfirmation(post)}/>
          </div>
            <h1 id="pid-post-title">{post && post.title}</h1>
            <div id="pid-user-details">
              <img src="http://via.placeholder.com/50x50" alt={""} id="pid-profile-image" />
              <span id="pid-user-details-right">
                <span id="pid-author-name">{post && post.author}</span>
                <Timestamp style={{fontSize: '.8em'}} time={post && `${post.timestamp}`}/>
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
          isOpen={this.props.isDeleteConfirmationOpen}
          closeModalCallback={() => this.props.toggleDeletePostConfirmation(post)}>
          <DeleteConfirm
            cancelCallback={() => this.props.toggleDeletePostConfirmation(post)}
            confirmCallback={() => this.confirmDelete(post)}/>
        </Modal>
        <Modal
          isOpen={this.props.isEditPostFormOpen && post.id === this.props.editingPost.id}
          closeModalCallback={() => this.props.toggleEditPostForm(undefined)}>
          <AddPostForm id={post.id}/>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({posts, forms}) => {
  return {
    openedPost: posts.openedPost,
    isDeleteConfirmationOpen: forms.isDeleteConfirmationOpen,
    isEditPostFormOpen: forms.isEditPostFormOpen,
    editingPost: forms.editingPost,
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    openPostRequest: (id) => dispatch(openPostRequest(id)),
    deletePostRequest: (id) => dispatch(deletePostRequest(id)),
    toggleDeletePostConfirmation: (id) => dispatch(toggleDeletePostConfirmation(id)),
    toggleEditPostForm: (post) => dispatch(toggleEditPostForm(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemDetailPage)