import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { FieldArrayRenderProps } from 'formik'
import { DeleteBtn } from './style'

type Props = {
  index: number
  arrayHelpers: FieldArrayRenderProps
}

const DeleteButton = (props: Props) => {
  return (
    <DeleteBtn>
      <IconButton
        aria-label='delete'
        onClick={() => props.arrayHelpers.remove(props.index)}
        style={{ backgroundColor: '#DF3838', borderRadius: '4px' }}
        size='small'
      >
        <DeleteForeverRoundedIcon style={{ fill: '#fff', transform: 'scale(0.95)' }} />
      </IconButton>
    </DeleteBtn>
  )
}

export default DeleteButton
