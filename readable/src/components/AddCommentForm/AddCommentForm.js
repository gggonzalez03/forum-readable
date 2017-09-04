import React, { Component } from 'react'
import './AddCommentForm.css'

class AddCommentForm extends Component {
  render() {
    return (
      <div id="acf-comment-form-container">
        <form id="acf-comment-form">
          <input id="acf-comment-author" className="acf-comment-input" placeholder="Author name..."/>
          <textarea id="acf-comment-comment" className="acf-comment-input" placeholder="Type your comment here..."></textarea>
          <div id="acf-action-buttons">
            <span id="acf-comment-cancel">Cancel</span>
            <span id="acf-comment-submit">Submit</span>
          </div>
        </form>
      </div>
    )
  }
}

export default AddCommentForm