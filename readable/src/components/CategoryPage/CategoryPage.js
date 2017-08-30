import React, { Component } from 'react'
import PostsList from '../PostsList/PostsList'
import './CategoryPage.css'

class CategoryPage extends Component {
  render() {
    return (
      <div id="category-page">
        <PostsList id="posts-list" category={this.props.match.params.category}/>
      </div>
    )
  }
}

export default CategoryPage