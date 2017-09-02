import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import { withRouter } from 'react-router-dom'
import {
  fetchAllPosts,
  fetchCategoryPosts,
  sortPosts,
} from '../../actions/posts'
import { toggleSortSelection } from '../../actions/index'
import {
  MdArrowDropDown,
  MdCheck
} from 'react-icons/lib/md'
import { connect } from 'react-redux'

import './PostsList.css'

class PostsList extends Component {
  componentWillMount = () => {
    this.fetchPosts(this.props.match.params.category)
  }
  
  fetchPosts = (category) => {
    category ?
    this.props.fetchCategoryPosts(category) :
    this.props.fetchAllPosts()
  }

  render() {
    return (
      <div id="posts-list">
        <div id="pl-sort-button">
          <div id="pl-sort-button-label" onClick={() => this.props.toggleSortSelection()}>Sort<MdArrowDropDown/></div>
          <div id={this.props.isSortSelectionOpen ? "pl-sort-selection-open" : "pl-sort-selection-close"}>
            <div id="">
              <span className="pl-sort-option"
                onClick={() => this.props.sortPosts("timestamp", this.props.sortOrder)}
              >Date{this.props.sortBy === "timestamp" && <MdCheck className="pl-check-selected"/>}</span>
              <span className="pl-sort-option"
                onClick={() => this.props.sortPosts("voteScore", this.props.sortOrder)}
              >Vote Score{this.props.sortBy === "voteScore" && <MdCheck className="pl-check-selected"/>}</span>
            </div>
            <hr/>
            <div id="">
              <span className={this.props.sortOrder === "ascending" ? "pl-sort-order-selected" : "pl-sort-order"}
                onClick={() => this.props.sortPosts(this.props.sortBy, "ascending")}>Ascending</span>
              <span className={this.props.sortOrder === "descending" ? "pl-sort-order-selected" : "pl-sort-order"}
                onClick={() => this.props.sortPosts(this.props.sortBy, "descending")}>Descending</span>
            </div>
            <hr/>
          </div>
        </div>
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

const mapStateToProps = ({posts, categories, index}) => {
  return {
    showingPosts: posts.showingPosts,
    selectedCategory: categories.selectedCategory,
    sortOrder: posts.sortOrder,
    sortBy: posts.sortBy,
    isSortSelectionOpen: index.isSortSelectionOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
    toggleSortSelection: () => dispatch(toggleSortSelection()),
    sortPosts: (sortBy, sortOrder) => dispatch(sortPosts(sortBy, sortOrder)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsList));