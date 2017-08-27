import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostById } from '../../actions/posts'
import Timestamp from 'react-timestamp'
import {
  MdFavorite,
  MdFavoriteOutline,
  MdReply,
  MdComment,
} from 'react-icons/lib/md'
import './PostItemDetailPage.css'

class PostItemDetailPage extends Component {

  componentWillMount = () => {
    this.props.fetchPostById(this.props.match.params.post_id)
  }
  render() {
    const post = this.props.post
    return (
      <div id="post-item-detail-page">
        <div id="post-item-detail">
          <div id="post-item-container">
            <h1 id="pid-post-title">{post && post.title}</h1>
            <div id="pid-user-details">
              <img src="http://via.placeholder.com/50x50" alt={""} id="pid-profile-image" />
              <span id="pid-user-details-right">
                <span id="pid-author-name">{post && post.author}</span>
                <Timestamp style={{fontSize: '.8em'}} time={post && new Date(post.timestamp)}/>
              </span>
            </div>
            <p id="pid-post-body">
              {post && post.body}
            </p>
            <div id="pid-action-icons">
              <MdFavoriteOutline/>
              <MdComment/>
              <MdReply/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    post: posts.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostById: (id) => dispatch(fetchPostById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemDetailPage)