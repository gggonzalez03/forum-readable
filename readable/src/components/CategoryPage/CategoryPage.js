import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import CategoryPostsHeader from '../CategoryPostsHeader/CategoryPostsHeader'
import PostsList from '../PostsList/PostsList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchAllPosts, fetchCategoryPosts
} from '../../actions/posts'
import {
  fetchCategories,
} from '../../actions/categories'
import changeCase from 'change-case'
import './CategoryPage.css'

class CategoryPage extends Component {
  componentWillMount() {
    this.props.fetchCategories()
    this.fetchPosts(this.props.match.params.category)
  }
  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }
  render() {
    const selectedCategory = this.props.match.params.category
    return (
      <div id="category-page">
        <SideBar>
          <div id="side-bar-menu-content">
            <div className="side-bar-section" id="side-bar-header">
              <img id="profile-image" src="http://via.placeholder.com/100x100" alt="Name" />
              <h3 className="user-name">Anonymous</h3>
              <hr/>
            </div>
            <div className="side-bar-section" id="side-bar-body">
              <Link
                to={'/'}
                className={!selectedCategory ? "menu-item-selected" : "menu-item"}
                onClick={() => this.fetchPosts(undefined)}
              >All</Link>
              {this.props.categories && this.props.categories.map((category, index) => 
                <Link
                  to={category.name}
                  key={index} className={selectedCategory === category.name ? "menu-item-selected" : "menu-item"}
                  onClick={() => this.fetchPosts(category.name)}
                >
                  {changeCase.sentenceCase(category.name)}
                </Link>
              )}
            </div>
            <div className="side-bar-section" id="side-bar-footer">
              <Link to={'/categories'} className="menu-item" id="menu-item-logout">Logout</Link>
            </div>
          </div>
        </SideBar>
        <CategoryPostsHeader id="category-posts-header" title={selectedCategory}/>
        <PostsList id="posts-list"/>
      </div>
    )
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);