import React, { Component } from 'react'
import { MdAddCircle } from 'react-icons/lib/md'

import './CategoryPostsHeader.css'

class CategoryPostsHeader extends Component {
  render() {
    return (
      <div id="category-posts-header">
        <h2 id="title">All</h2>
        <div id="add-post-button">
          <MdAddCircle/>
          <span> Add Post</span>
        </div>  
      </div>
    )
  }
}

export default CategoryPostsHeader