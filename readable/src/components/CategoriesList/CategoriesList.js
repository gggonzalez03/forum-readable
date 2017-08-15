import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'
import './CategoriesList.css'

import PostsList from '../PostsList/PostsList'

class CategoriesList extends Component {

  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div id="categories-list">
        <div id="category-container">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h3 className="category-name">{category.name}</h3>
              <span className="category-description">{category.description}</span>
            </div>
          ))}
        </div>
        <Link to='/all' id="see-all">
          <div>See All</div>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);