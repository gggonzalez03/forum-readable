import React, { Component } from 'react'
import { MdAddCircle } from 'react-icons/lib/md'
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
          <span> Add Post</span>
        </div>  
      </div>
    )
  }
}

export default CategoryPostsHeader