import React, { Component } from 'react'
import MdMenu from 'react-icons/lib/md/menu';
import './SideBar.css'

class SideBar extends Component {

  state = {}
  
  render() {
    const { children } = this.props
    const { sidebarOpen } = this.state
    const styles = {
      sideBarClose: {
        display: 'inline-block',
        position: 'absolute',
        height: 'calc(100% - 2em)',
        left: 'calc(-20% - 2em)',
        width: '20%',
        padding: '1em',
        transition: 'all .1s ease-in'
      },
      sideBarOpen: {
        display: 'inline-block',
        position: 'absolute',
        height: 'calc(100% - 2em)',
        left: 0,
        width: '20%',
        padding: '1em',
        backgroundColor: 'white',
        transition: 'all .1s ease-in'
      },
    }
    return (
      <div id={sidebarOpen?"sidebar-open":"sidebar-close"}>
        <MdMenu id="menu-icon" onClick={() => this.setState({sidebarOpen: !sidebarOpen})}/>
        {children}
      </div>
    )
  }
}

export default SideBar