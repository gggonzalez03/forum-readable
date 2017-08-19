import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'
import changeCase from 'change-case'
import MdKeyBoardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'

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
            <Link to={`/${category.name}`} key={index} className="category">
              <div className="category-detail">
                <h3 className="category-name">{changeCase.sentenceCase(category.name)}</h3>
                <span className="category-description">{category.description}</span>
              </div>
              <MdKeyBoardArrowRight className="right-arrow"/>
            </Link>
          ))}
        </div>
        <Link to='/' id="see-all">
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