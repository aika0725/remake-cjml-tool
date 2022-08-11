import { IconButton } from '@material-ui/core'
import React from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'

const FormCard = () => {
  return (
    <IconButton color='primary' aria-label='upload picture' component='label'>
      <DeleteForeverRoundedIcon />
    </IconButton>
  )
}

export default FormCard
