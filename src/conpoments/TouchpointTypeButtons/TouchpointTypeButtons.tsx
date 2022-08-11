import React from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

type Props = {
  display: (value: string) => void
}
const TouchpointTypeButtons = (props: Props) => {
  return (
    <div>
      <Stack className='touchpoint-types' spacing={2} direction='row'>
        <Button
          variant='text'
          onClick={() => {
            props.display('action')
          }}
        >
          Create Action
        </Button>
        <Button
          variant='text'
          onClick={() => {
            props.display('communication')
          }}
        >
          Create Communication point
        </Button>
      </Stack>
    </div>
  )
}

export default TouchpointTypeButtons
