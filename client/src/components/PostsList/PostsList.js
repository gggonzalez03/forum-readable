import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import {
  sortPosts,
} from '../../actions/posts'
import SortPostsButton from '../SortPostsButton/SortPostsButton'
import { connect } from 'react-redux'

import './PostsList.css'

class PostsList extends Component {

  componentDidUpdate = nextProps => {
    // Call sortPosts whenever previous posts and next posts are not totally equal
    // Order of the posts and order of its properties do matter.
    if (JSON.stringify(this.props.showingPosts) !== JSON.stringify(nextProps.showingPosts))
      this.props.sortPosts(this.props.sortBy, this.props.sortOrder)
  }

  render() {
    return (
      <div id="posts-list">
        <SortPostsButton/>
        {this.props.showingPosts && this.props.showingPosts.map((post) =>
          <PostItem
            key={post.id}
            post={post}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({posts, index}) => {
  return {
    sortOrder: posts.sortOrder,
    sortBy: posts.sortBy,
    isSortSelectionOpen: index.isSortSelectionOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortPosts: (sortBy, sortOrder) => dispatch(sortPosts(sortBy, sortOrder)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)