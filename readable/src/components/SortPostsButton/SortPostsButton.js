import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  MdArrowDropDown,
  MdCheck
} from 'react-icons/lib/md'
import {
  fetchAllPosts,
  fetchCategoryPosts,
  sortPosts,
} from '../../actions/posts'
import { toggleSortSelection } from '../../actions/index'
import './SortPostsButton.css'

class SortPostsButton extends Component {
  render() {
    return (
      <div
        id="pl-sort-button-container"
        tabIndex="0"
        onFocus={() => this.props.toggleSortSelection()}
        onBlur={() => this.props.toggleSortSelection()}
      >
        <div id="pl-sort-button">
          <div id="pl-sort-button-label">
            Sort<MdArrowDropDown />
          </div>
        </div>
        <div id={this.props.isSortSelectionOpen ? "pl-sort-selection-open" : "pl-sort-selection-close"}>
          <div id="">
            <span className="pl-sort-option"
              onClick={() => this.props.sortPosts("timestamp", this.props.sortOrder)}
            >Date{this.props.sortBy === "timestamp" && <MdCheck className="pl-check-selected" />}</span>
            <span className="pl-sort-option"
              onClick={() => this.props.sortPosts("voteScore", this.props.sortOrder)}
            >Vote Score{this.props.sortBy === "voteScore" && <MdCheck className="pl-check-selected" />}</span>
          </div>
          <hr />
          <div id="">
            <span className={this.props.sortOrder === "ascending" ? "pl-sort-order-selected" : "pl-sort-order"}
              onClick={() => this.props.sortPosts(this.props.sortBy, "ascending")}>Ascending</span>
            <span className={this.props.sortOrder === "descending" ? "pl-sort-order-selected" : "pl-sort-order"}
              onClick={() => this.props.sortPosts(this.props.sortBy, "descending")}>Descending</span>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts, index }) => {
  return {
    sortOrder: posts.sortOrder,
    sortBy: posts.sortBy,
    isSortSelectionOpen: index.isSortSelectionOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSortSelection: () => dispatch(toggleSortSelection()),
    sortPosts: (sortBy, sortOrder) => dispatch(sortPosts(sortBy, sortOrder)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortPostsButton)