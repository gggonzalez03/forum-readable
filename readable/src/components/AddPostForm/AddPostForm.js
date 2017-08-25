import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchAllPosts, fetchCategoryPosts
} from '../../actions/posts'
import {
  editPostTitle,
  editPostBody,
  editPostUsername,
  editPostCategory,
  submitPostRequest,
  toggleAddPostForm,
} from '../../actions/forms'
import changeCase from 'change-case'
import './AddPostForm.css'

class AddPostForm extends Component {
  constructor(props) {
    super(props)
    props.editPostCategory(props.selectedCategory||"selectcategory")
  }
  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }
  submitPost = (title, body, username, category) => {
    this.props.toggleAddPostForm()
    this.props.submitPostRequest(
      title,
      body,
      username,
      category,
    )

    this.fetchPosts(this.props.selectedCategory)
  }
  render() {

    const {
      title,
      body,
      username,
      category,
      categories,
    } = this.props

    const {
      editPostTitle,
      editPostUsername,
      editPostCategory,
      editPostBody,
      toggleAddPostForm,
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
          <span id="post-close" onClick={() => toggleAddPostForm()}>Cancel</span>
          <span id="post-submit" 
            onClick={() => this.submitPost(
              title,
              body,
              username,
              category)}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddPostForm: () => dispatch(toggleAddPostForm()),
    editPostTitle: (title) => dispatch(editPostTitle(title)),
    editPostBody: (body) => dispatch(editPostBody(body)),
    editPostUsername: (username) => dispatch(editPostUsername(username)),
    editPostCategory: (category) => dispatch(editPostCategory(category)),
    submitPostRequest: (title, body, username, category) => dispatch(submitPostRequest(title, body, username, category)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);