import React, { Component } from 'react'
import MdMenu from 'react-icons/lib/md/menu';
import { connect } from 'react-redux'
import { toggleSideBarMenu } from '../../actions'
import './SideBar.css'

class SideBar extends Component {
  render() {
    const { children, toggleSideBarMenu, isSideBarMenuOpen } = this.props
    console.log(isSideBarMenuOpen)
    return (
      <div id={isSideBarMenuOpen ? "side-bar-open" : "side-bar-close"}>
        <MdMenu id="menu-icon" onClick={() => toggleSideBarMenu()} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {
    isSideBarMenuOpen: posts.isSideBarMenuOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSideBarMenu: () => dispatch(toggleSideBarMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)