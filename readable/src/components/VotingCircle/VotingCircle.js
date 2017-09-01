import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  MdArrowDropUp,
  MdArrowDropDown
} from 'react-icons/lib/md'
import { voteRequest } from '../../actions/posts'
import './VotingCircle.css'

class VotingCircle extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="post-vote-button-group">
        <MdArrowDropUp className="post-vote-button" onClick={() => this.props.voteRequest(post.id, "upVote")} />
        <span>{post && post.voteScore}</span>
        <MdArrowDropDown className="post-vote-button" onClick={() => this.props.voteRequest(post.id, "downVote")} />
      </div>
    )
  }
}
const mapStateToProps = ({posts}) => {
  return {
    showingPosts: posts.showingPosts,
    openedPost: posts.openedPost,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    voteRequest: (id, option) => dispatch(voteRequest(id, option)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingCircle);