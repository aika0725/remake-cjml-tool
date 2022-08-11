import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { FieldArrayRenderProps } from 'formik'

type Props = {
  index: number
  arrayHelpers: FieldArrayRenderProps
}

const DeleteButton = (props: Props) => {
  return (
    <IconButton
      aria-label='delete'
      color='error'
      onClick={() => props.arrayHelpers.remove(props.index)}
    >
      <DeleteForeverRoundedIcon />
    </IconButton>
  )
}

export default DeleteButton
