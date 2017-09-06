import React, { Component } from 'react'
import PostsList from '../PostsList/PostsList'
import { connect } from 'react-redux'
import {
  fetchAllPosts,
  fetchCategoryPosts,
} from '../../actions/posts'
import './CategoryPage.css'

class CategoryPage extends Component {

  componentWillMount = () => {
    this.fetchPosts(this.props.match.params.category)
  }

  componentDidUpdate = prevProps => {
    // The key parameter is what keeps the two different
    // when they need to be of the same value, thus it needs to be removed
    // before checking
    this.props.location.key = undefined
    prevProps.location.key = undefined

    if (this.props.location !== prevProps.location) {
      this.fetchPosts(this.props.match.params.category)
    }
  }

  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }

  render() {
    return (
      <div id="category-page">
        <PostsList id="posts-list" showingPosts={this.props.showingPosts}/>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    showingPosts: posts.showingPosts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)