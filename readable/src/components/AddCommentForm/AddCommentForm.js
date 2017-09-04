import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  editCommentAuthor,
  editCommentBody,
  toggleEditCommentForm,
} from '../../actions/forms'
import {
  addCommentByPostIdRequest,
} from '../../actions/comments'
import './AddCommentForm.css'

class AddCommentForm extends Component {

  submitComment = (postId, author, body) => {
    this.props.addCommentByPostIdRequest(postId, author, body)
    this.props.toggleEditCommentForm()
  }

  render() {
    return (
      <div id="acf-comment-form-container">
        <form id="acf-comment-form">
          <input id="acf-comment-author"
            className="acf-comment-input"
            placeholder="Author name..."
            onChange={({target}) => this.props.editCommentAuthor(target.value)}
            value={this.props.author}
          />
          <textarea id="acf-comment-comment"
            className="acf-comment-input"
            placeholder="Type your comment here..."
            onChange={({target}) => this.props.editCommentBody(target.value)}
            value={this.props.body}
          >
          </textarea>
          <div id="acf-action-buttons">
            <span id="acf-comment-cancel"
              onClick={() => this.props.toggleEditCommentForm()}
            >
              Cancel
            </span>
            <span id="acf-comment-submit"
              onClick={() => this.submitComment(this.props.post.id, this.props.author, this.props.body)}
            >
              Submit
            </span>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({forms}) => {
  return {
    author: forms.editCommentForm.editCommentAuthor,
    body: forms.editCommentForm.editCommentBody,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCommentAuthor: (author) => dispatch(editCommentAuthor(author)),
    editCommentBody: (body) => dispatch(editCommentBody(body)),
    toggleEditCommentForm: () => dispatch(toggleEditCommentForm()),
    addCommentByPostIdRequest: (postId, author, body) => dispatch(addCommentByPostIdRequest(postId, author, body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm)