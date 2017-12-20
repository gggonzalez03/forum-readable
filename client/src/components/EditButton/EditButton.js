import React from 'react'
import MdEdit from 'react-icons/lib/md/edit'
import './EditButton.css'

const EditButton = ({editButtonCallBack}) => (
  <MdEdit id="epb-edit-button" onClick={() => editButtonCallBack()}/>
)

export default EditButton