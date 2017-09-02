import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  addPostRequest,
  editPostRequest,
  fetchCategoryPosts,
  fetchAllPosts,
} from '../../actions/posts'
import {
  editPostTitle,
  editPostBody,
  editPostUsername,
  editPostCategory,
  toggleEditPostFormRequest,
  toggleAddPostForm,
} from '../../actions/forms'
import changeCase from 'change-case'
import './AddPostForm.css'

class AddPostForm extends Component {

  componentWillMount = () => {
    this.props.editPostCategory(this.props.selectedCategory)
  }

  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }
  
  submitPost = (id, title, body, username, category) => {

    if (id) {
      this.props.toggleEditPostFormRequest(undefined)
      this.props.editPostRequest(
        id,
        title,
        body,
      )
    }
    else if (!id){

      if (this.props.selectedCategory !== category) {
        this.fetchPosts(category)
        this.props.history.push(`/${category}`)
      }

      this.props.toggleAddPostForm()
      this.props.addPostRequest(
        title,
        body,
        username,
        category,
      )
    }
  }

  closeForm = (id) => {
    if (id) {
      this.props.toggleEditPostFormRequest(undefined)
    }
    else if (!id){
      this.props.toggleAddPostForm()
    }
  }
  
  render() {

    const {
      id,
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
            <option value="">{changeCase.sentenceCase("select category")}</option>
          </select>
        </div>
        <textarea id="post-body" placeholder="Body" required
          onChange={({target}) => editPostBody(target.value)}
          value={body}/>
        <div id="post-buttons">
          <span id="post-close" onClick={() => this.closeForm(id)}>Cancel</span>
          <span id="post-submit" 
            onClick={() => this.submitPost(
              id,
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

const mapStateToProps = ({categories, forms}) => {
  return {
    categories: categories.categories,
    title: forms.editPostForm.editPostTitle,
    body: forms.editPostForm.editPostBody,
    username: forms.editPostForm.editPostUsername,
    category: forms.editPostForm.editPostCategory,
    selectedCategory: categories.selectedCategory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddPostForm: () => dispatch(toggleAddPostForm()),
    editPostTitle: (title) => dispatch(editPostTitle(title)),
    editPostBody: (body) => dispatch(editPostBody(body)),
    editPostUsername: (username) => dispatch(editPostUsername(username)),
    editPostCategory: (category) => dispatch(editPostCategory(category)),
    addPostRequest: (title, body, username, category) => dispatch(addPostRequest(title, body, username, category)),
    editPostRequest: (id, title, body) => dispatch(editPostRequest(id, title, body)),
    toggleEditPostFormRequest: (id) => dispatch(toggleEditPostFormRequest(id)),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPostForm));