import { IconButton } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function CreateGroups() {
  return (
    <div className='create-group-container'>
      <input placeholder='Enter Your Group Name' type='text' className='search-box' />
    <IconButton>
    < CheckCircleOutlineIcon />
    </IconButton>
    </div>
  )
}

export default CreateGroups
