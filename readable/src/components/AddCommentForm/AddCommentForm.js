import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  editCommentAuthor,
  editCommentBody,
  toggleEditCommentForm,
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
    if (this.props.comment)
      this.props.editPostComment(this.props.comment.id, body)
    else
      this.props.addPostComment(postId, author, body)

    this.props.toggleEditCommentForm(undefined)
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
    toggleEditCommentForm: (comment) => dispatch(toggleEditCommentForm(comment)),
    addPostComment: (postId, author, body) => dispatch(addPostComment(postId, author, body)),
    editPostComment: (postId, body) => dispatch(editPostComment(postId, body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm)