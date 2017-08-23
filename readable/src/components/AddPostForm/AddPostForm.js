import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleAddPostForm } from '../../actions'
import {
  editPostTitle,
  editPostBody,
  editPostUsername,
  editPostCategory,
  submitPostRequest,
} from '../../actions/forms'
import './AddPostForm.css'

class AddPostForm extends Component {
  submitPost = (title, body, username, category) => {
    this.props.toggleAddPostForm()
    this.props.submitPostRequest(
      title,
      body,
      username,
      category,
    )
  }
  render() {

    const {
      title,
      body,
      username,
      category,
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
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udactiy">Udacity</option>
            <option value="" selected>Random</option>
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

const mapStateToProps = ({posts, forms}) => {
  return {
    isAddPostFormOpen: posts.isAddPostFormOpen,
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
    submitPostRequest: (title, body, username, category) => dispatch(submitPostRequest(title, body, username, category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);