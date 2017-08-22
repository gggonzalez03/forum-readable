import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleAddPostForm } from '../../actions'
import './AddPostForm.css'

class AddPostForm extends Component {
  render() {
    return (
      <form id="add-post-form">
        <input id="post-title" type="text" name="post-title" placeholder="Title" required/>
        <div id="post-other-details">
          <input id="post-username" type="text" name="post-username" placeholder="Username"/>
          <select id="post-category" type="text" name="post-category">
            <option name="">React</option>
            <option name="">Redux</option>
            <option name="">Udacity</option>
            <option name="" selected>Random</option>
          </select>
        </div>
        <textarea id="post-body" placeholder="Body" required/>
        <div id="post-buttons">
          <span id="post-close" onClick={() => this.props.toggleAddPostForm()}>Cancel</span>
          <span id="post-submit" onClick={() => this.props.toggleAddPostForm()}>Submit</span>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAddPostFormOpen: state.isAddPostFormOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddPostForm: () => dispatch(toggleAddPostForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);