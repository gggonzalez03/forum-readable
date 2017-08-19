import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import CategoryPostsHeader from '../CategoryPostsHeader/CategoryPostsHeader'
import PostsList from '../PostsList/PostsList'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'
import changeCase from 'change-case'
import './CategoryPage.css'

class CategoryPage extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }
  render() {
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
              <p className="menu-item">All</p>
              {this.props.categories && this.props.categories.map((category, index) => 
                <p key={index} className="menu-item">{changeCase.sentenceCase(category.name)}</p>
              )}
            </div>
            <div className="side-bar-section" id="side-bar-footer">
              <p className="menu-item" id="menu-item-logout">Logout</p>
            </div>
          </div>
        </SideBar>
        <CategoryPostsHeader id="category-posts-header"/>
        <PostsList id="posts-list"/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);