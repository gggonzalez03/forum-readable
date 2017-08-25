import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchAllPosts,
  fetchCategoryPosts,
} from '../../actions/posts'
import {
  editPostTitle,
  editPostBody,
  editPostUsername,
  editPostCategory,
  submitPostRequest,
  submitEditPostRequest,
  toggleAddPostForm,
  toggleEditPostForm,
  initializeEditPostFieldValuesRequest,
} from '../../actions/forms'
import changeCase from 'change-case'
import './AddPostForm.css'

class AddPostForm extends Component {
  componentWillMount = () => {
    this.props.editPostCategory(this.props.selectedCategory||"selectcategory")
    if (this.props.id) {
      this.props.initializeEditPostFieldValuesRequest(this.props.id)
    }
  }

  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }

  togglePostForm = (id) => {
    id ?
    this.props.toggleEditPostForm() :
    this.props.toggleAddPostForm()
  }

  submitPost = (id, title, body, username, category, editMode) => {

    if (editMode && id) {
      this.props.toggleEditPostForm(id)
      this.props.submitEditPostRequest(
        id,
        title,
        body,
      )
    }
    else if (!editMode && !id){
      this.props.toggleAddPostForm()
      this.props.submitPostRequest(
        title,
        body,
        username,
        category,
      )
    }

    this.fetchPosts(this.props.selectedCategory)
  }
  render() {

    const {
      id,
      title,
      body,
      username,
      category,
      categories,
      editMode,
    } = this.props

    const {
      editPostTitle,
      editPostUsername,
      editPostCategory,
      editPostBody,
    } = this.props

    return (
      <form id="add-post-form">
        <input id="post-title" type="text" name="post-title" placeholder="Title" required
          onChange={({target}) => editPostTitle(target.value)}
          value={title}/>
        <div id="post-other-details">
          <input id="post-username" type="text" name="post-username" placeholder="Username"
            onChange={({target}) => editPostUsername(target.value)}
            value={username}/>
          <select id="post-category" type="text" name="post-category"
            onChange={({target}) => editPostCategory(target.options[target.selectedIndex].value)}
            value={category}>
            {categories && categories.map((cat) => 
              <option key={cat.name} value={cat.name}>{changeCase.sentenceCase(cat.name)}</option>)}
            <option value="selectcategory">{changeCase.sentenceCase("select category")}</option>
          </select>
        </div>
        <textarea id="post-body" placeholder="Body" required
          onChange={({target}) => editPostBody(target.value)}
          value={body}/>
        <div id="post-buttons">
          <span id="post-close" onClick={() => this.togglePostForm(id)}>Cancel</span>
          <span id="post-submit" 
            onClick={() => this.submitPost(
              id,
              title,
              body,
              username,
              category,
              editMode)}
            >
              Submit
          </span>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({categories, posts, forms}) => {
  return {
    isAddPostFormOpen: forms.isAddPostFormOpen,
    categories: categories.categories,
    title: forms.editPostTitle,
    body: forms.editPostBody,
    username: forms.editPostUsername,
    category: forms.editPostCategory,
    editingPost: posts.editingPost,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddPostForm: () => dispatch(toggleAddPostForm()),
    toggleEditPostForm: (id) => dispatch(toggleEditPostForm(id)),
    editPostTitle: (title) => dispatch(editPostTitle(title)),
    editPostBody: (body) => dispatch(editPostBody(body)),
    editPostUsername: (username) => dispatch(editPostUsername(username)),
    editPostCategory: (category) => dispatch(editPostCategory(category)),
    submitPostRequest: (title, body, username, category) => dispatch(submitPostRequest(title, body, username, category)),
    submitEditPostRequest: (id, title, body) => dispatch(submitEditPostRequest(id, title, body)),
    initializeEditPostFieldValuesRequest: (id) => dispatch(initializeEditPostFieldValuesRequest(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);