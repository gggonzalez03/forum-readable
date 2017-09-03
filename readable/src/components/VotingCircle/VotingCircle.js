import React, { Component } from 'react'
import {
  MdArrowDropUp,
  MdArrowDropDown
} from 'react-icons/lib/md'
import './VotingCircle.css'

class VotingCircle extends Component {
  render() {
    const { voteScore } = this.props
    return (
      <div className="post-vote-button-group">
        <MdArrowDropUp className="post-vote-button" onClick={() => this.props.upVoteCallback()} />
        <span>{voteScore && voteScore}</span>
        <MdArrowDropDown className="post-vote-button" onClick={() => this.props.downVoteCallback()} />
      </div>
    )
  }
}

export default VotingCircle