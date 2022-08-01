import { Button } from '@mui/material'
import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

const ButtonAdd = (props: ButtonProps) => {
  return (
    <div>
      <Button variant='outlined' color='error' onClick={props.handleClick}>
        Add
      </Button>
    </div>
  )
}
export default ButtonAdd
