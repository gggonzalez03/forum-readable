import React from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import './DeleteButton.css'

const DeleteButton = ({deleteButtonCallBack}) => (
  <MdDelete id="dpb-delete-button" onClick={() => deleteButtonCallBack()}/>
)

export default DeleteButton