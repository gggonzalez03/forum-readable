import React from 'react'
import MdClear from 'react-icons/lib/md/clear'
import './DeleteConfirm.css'

const DeleteConfirm = ({cancelCallback, confirmCallback}) => (
  <div id="confirm-delete-popup">
    <MdClear id="confirm-exit-popup"
      onClick={() => cancelCallback()} />
    <span id="confirm-message">Are you sure you want to delete this post?</span>
    <div id="confirm-action-buttons">
      <span id="confirm-cancel"
        onClick={() => cancelCallback()}>Cancel</span>
      <span id="confirm-delete"
        onClick={() => confirmCallback()}>Delete</span>
    </div>
  </div>
)

export default DeleteConfirm