import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  addPost,
  editPost,
  fetchCategoryPosts,
  fetchAllPosts,
} from '../../actions/posts'
import {
  editPostTitle,
  editPostBody,
  editPostAuthor,
  editPostCategory,
  toggleEditPostForm,
  toggleAddPostForm,
} from '../../actions/forms'
import changeCase from 'change-case'
import './AddPostForm.css'

class AddPostForm extends Component {

  componentWillMount = () => {
    if (!this.props.category)
      this.props.editPostCategory(this.props.selectedCategory)
  }

  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }
  
  submitPost = (id, title, body, author, category) => {

    if (id) {
      this.props.toggleEditPostForm(undefined)
      this.props.editPost(
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
      this.props.addPost(
        title,
        body,
        author,
        category,
      )
    }
  }

  closeForm = (id) => {
    if (id) {
      this.props.toggleEditPostForm(undefined)
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
      author,
      category,
      categories,
    } = this.props

    const {
      editPostTitle,
      editPostAuthor,
      editPostCategory,
      editPostBody,
    } = this.props

    let disabledAttributes = {}

    // If AddPostForm has a post passed into it (editing mode)
    // then some inputs have to be disabled since they are not
    // allowed to be edited
    if (this.props.id)
      disabledAttributes['disabled'] = 'disabled'

    return (
      <form id="add-post-form">
        <input id="post-title" className="apf-post-input" type="text" name="post-title" placeholder="Title" required
          onChange={({target}) => editPostTitle(target.value)}
          value={title}/>
        <div id="post-other-details">
          <input id="post-username" className="apf-post-input" type="text" name="post-username" placeholder="Username"
            onChange={({target}) => editPostAuthor(target.value)}
            value={author}
            {...disabledAttributes}
          />
          <select id="post-category" className="apf-post-input" type="text" name="post-category"
            onChange={({target}) => editPostCategory(target.options[target.selectedIndex].value)}
            value={category}
            {...disabledAttributes}
          >
            {categories && categories.map((cat) => 
              <option key={cat.name} value={cat.name}>{changeCase.sentenceCase(cat.name)}</option>)}
            <option value="">{changeCase.sentenceCase("select category")}</option>
          </select>
        </div>
        <textarea id="post-body" className="apf-post-input" placeholder="Body" required
          onChange={({target}) => editPostBody(target.value)}
          value={body}/>
        <div id="post-buttons">
          <span id="post-close" onClick={() => this.closeForm(id)}>Cancel</span>
          <span id="post-submit" 
            onClick={() => this.submitPost(
              id,
              title,
              body,
              author,
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
    author: forms.editPostForm.editPostAuthor,
    category: forms.editPostForm.editPostCategory,
    selectedCategory: categories.selectedCategory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddPostForm: () => dispatch(toggleAddPostForm()),
    editPostTitle: (title) => dispatch(editPostTitle(title)),
    editPostBody: (body) => dispatch(editPostBody(body)),
    editPostAuthor: (author) => dispatch(editPostAuthor(author)),
    editPostCategory: (category) => dispatch(editPostCategory(category)),
    addPost: (title, body, author, category) => dispatch(addPost(title, body, author, category)),
    editPost: (id, title, body) => dispatch(editPost(id, title, body)),
    toggleEditPostForm: (id) => dispatch(toggleEditPostForm(id)),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPostForm));