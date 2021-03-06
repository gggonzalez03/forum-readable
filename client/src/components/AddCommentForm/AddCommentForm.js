import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  editCommentAuthor,
  editCommentBody,
  toggleEditCommentForm,
  toggleAddCommentForm,
} from '../../actions/forms'
import {
  addPostComment,
  editPostComment,
} from '../../actions/comments'
import './AddCommentForm.css'

class AddCommentForm extends Component {

  componentWillMount = () => {
    this.props.editCommentAuthor(this.props.comment ? this.props.comment.author : '')
    this.props.editCommentBody(this.props.comment ? this.props.comment.body : '')
  }

  submitComment = (postId, author, body) => {
    if (this.props.comment) {
      this.props.editPostComment(this.props.comment.id, body)
      this.props.toggleEditCommentForm(this.props.comment)
    }
    else {
      this.props.addPostComment(postId, author, body)
      this.props.toggleAddCommentForm()
    }
  }

  render() {

    let disabledAttributes = {}

    // If AddCommentForm has a comment passed into it (editing mode)
    // then some inputs have to be disabled since they are not
    // allowed to be edited
    if (this.props.comment)
      disabledAttributes['disabled'] = 'disabled'

    return (
      <div id="acf-comment-form-container">
        <form id="acf-comment-form">
          <input id="acf-comment-author"
            className="acf-comment-input"
            placeholder="Author name..."
            onChange={({ target }) => this.props.editCommentAuthor(target.value)}
            value={this.props.author}
            {...disabledAttributes}
          />
          <textarea id="acf-comment-comment"
            className="acf-comment-input"
            placeholder="Type your comment here..."
            onChange={({ target }) => this.props.editCommentBody(target.value)}
            value={this.props.body}
          >
          </textarea>
          <div id="acf-action-buttons">
            <span id="acf-comment-cancel"
              onClick={() => this.props.toggleEditCommentForm(undefined)}
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

const mapStateToProps = ({ forms }) => {
  return {
    author: forms.editCommentForm.editCommentAuthor,
    body: forms.editCommentForm.editCommentBody,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCommentAuthor: (author) => dispatch(editCommentAuthor(author)),
    editCommentBody: (body) => dispatch(editCommentBody(body)),
    toggleEditCommentForm: (comment) => dispatch(toggleEditCommentForm(comment)),
    toggleAddCommentForm: () => dispatch(toggleAddCommentForm()),
    addPostComment: (postId, author, body) => dispatch(addPostComment(postId, author, body)),
    editPostComment: (postId, body) => dispatch(editPostComment(postId, body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm)