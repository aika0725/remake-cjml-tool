import React from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { FieldArrayRenderProps } from 'formik'
import { touchpointInitialValues, TouchpointType } from '../../interfaces/Touchpoint'

type Props = {
  arrayHelpers: FieldArrayRenderProps
}
const TouchpointTypeButtons = (props: Props) => {
  const handleClick = (touchpointType: string) => {
    const touchpoint = { ...touchpointInitialValues, type: touchpointType }
    props.arrayHelpers.push(touchpoint)
  }

  return (
    <div>
      <Stack className='touchpoint-types' spacing={2} direction='row'>
        <Button variant='text' onClick={() => handleClick(TouchpointType.Action)}>
          Create Action
        </Button>
        <Button variant='text' onClick={() => handleClick(TouchpointType.Communication)}>
          Create Communication point
        </Button>
      </Stack>
    </div>
  )
}

export default TouchpointTypeButtons
