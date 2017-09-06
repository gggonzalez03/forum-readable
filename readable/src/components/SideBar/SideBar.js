import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MdMenu from 'react-icons/lib/md/menu';
import { connect } from 'react-redux'
import { toggleSideBarMenu } from '../../actions'
import {
  fetchAllPosts,
  fetchCategoryPosts,
} from '../../actions/posts'
import { fetchCategories } from '../../actions/categories'
import changeCase from 'change-case'
import './SideBar.css'

class SideBar extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { toggleSideBarMenu, isSideBarMenuOpen, selectedCategory } = this.props
    return (
      <div id={isSideBarMenuOpen ? "side-bar-open" : "side-bar-close"}>
        <MdMenu id="menu-icon" onClick={() => toggleSideBarMenu()} />
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
              >All</Link>
              {this.props.categories && this.props.categories.map((category, index) => 
                <Link
                  to={`/${category.name}`}
                  key={index} className={selectedCategory === category.name ? "menu-item-selected" : "menu-item"}
                >
                  {changeCase.sentenceCase(category.name)}
                </Link>
              )}
            </div>
            <div className="side-bar-section" id="side-bar-footer">
              <Link to={'/categories'} className="menu-item" id="menu-item-logout">Logout</Link>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({index, categories, posts}) => {
  return {
    isSideBarMenuOpen: index.isSideBarMenuOpen,
    categories: categories.categories,
    selectedCategory: categories.selectedCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    toggleSideBarMenu: () => dispatch(toggleSideBarMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)