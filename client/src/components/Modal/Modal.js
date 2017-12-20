import React, { Component } from 'react'
import './Modal.css'

import MdClear from 'react-icons/lib/md/clear';

class Modal extends Component {
  closeModal = () => {
    this.props.closeModalCallback()
  }

  render() {
    if (this.props.isOpen)
      return (
        <div className="modal">
          <div id="modal-content-container">
            <div id="modal-content">
              <MdClear id="close-modal" onClick={() => this.closeModal()}/>
              {this.props.children}
            </div>
          </div>
          <div className="blur-bg">
          </div>
        </div>
      )
    else return null
  }
}

export default Modal