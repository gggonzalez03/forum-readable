import React, { Component } from 'react'
import MdMenu from 'react-icons/lib/md/menu';
import './SideBar.css'

class SideBar extends Component {

  state = {
    sideBarOpen: true
  }
  
  render() {
    const { children } = this.props
    const { sideBarOpen } = this.state
    console.log(sideBarOpen)
    return (
      <div id={sideBarOpen?"side-bar-open":"side-bar-close"}>
        <MdMenu id="menu-icon" onClick={() => this.setState({sideBarOpen: !sideBarOpen})}/>
        {children}
      </div>
    )
  }
}

export default SideBar