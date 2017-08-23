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
    return (
      <form id="add-post-form">
        <input id="post-title" type="text" name="post-title" placeholder="Title" required
          onChange={({target}) => this.props.editPostTitle(target.value)}
          value={this.props.title}/>
        <div id="post-other-details">
          <input id="post-username" type="text" name="post-username" placeholder="Username"
            onChange={({target}) => this.props.editPostUsername(target.value)}
            value={this.props.username}/>
          <select id="post-category" type="text" name="post-category"
            onChange={({target}) => this.props.editPostCategory(target.options[target.selectedIndex].value)}
            value={this.props.category}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udactiy">Udacity</option>
            <option value="" selected>Random</option>
          </select>
        </div>
        <textarea id="post-body" placeholder="Body" required
          onChange={({target}) => this.props.editPostBody(target.value)}
          value={this.props.body}/>
        <div id="post-buttons">
          <span id="post-close" onClick={() => this.props.toggleAddPostForm()}>Cancel</span>
          <span id="post-submit" 
            onClick={() => this.submitPost(
              this.props.title,
              this.props.body,
              this.props.username,
              this.props.category)}
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