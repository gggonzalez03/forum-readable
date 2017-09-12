import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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

    // Check if category route is valid
    // If the category in the route string does not exist,
    // then the user will be redirected to not found page
    if (this.props.categories.length) {
      let categories = this.props.categories.map(category => category.name)
      categories.push(undefined)
      if (!categories.includes(this.props.match.params.category))
        return <Redirect to='/notfound'/>
    }
    
    return (
      <div id="category-page">
        <PostsList id="posts-list" showingPosts={this.props.showingPosts}/>
      </div>
    )
  }
}

const mapStateToProps = ({posts, categories}) => {
  return {
    showingPosts: posts.showingPosts,
    categories: categories.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)