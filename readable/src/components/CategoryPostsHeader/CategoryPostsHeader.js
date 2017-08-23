import React, { Component } from 'react'
import { MdAddCircle } from 'react-icons/lib/md'
import AddPostForm from '../AddPostForm/AddPostForm'
import Modal from '../Modal/Modal'
import { toggleAddPostForm } from '../../actions'
import { connect } from 'react-redux'
import changeCase from 'change-case'

import './CategoryPostsHeader.css'

class CategoryPostsHeader extends Component {
  render() {
    const title = this.props.title || "All"
    return (
      <div id="category-posts-header">
        <div className="flex-placeholder"></div>
        <h2 id="title">{changeCase.sentenceCase(title)}</h2>
        <div id="add-post-button">
          <MdAddCircle/>
          <span onClick={() =>this.props.toggleAddPostForm()}> Add Post</span>
        </div>
        <Modal isOpen={this.props.isAddPostFormOpen} closeModalCallback={() => this.props.toggleAddPostForm()}>
          <AddPostForm/>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    isAddPostFormOpen: posts.isAddPostFormOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddPostForm: () => dispatch(toggleAddPostForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPostsHeader);