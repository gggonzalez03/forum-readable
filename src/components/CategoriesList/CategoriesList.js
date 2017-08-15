import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'
import './CategoriesList.css'

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
              <hr />
            </div>
          ))}
        </div>
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