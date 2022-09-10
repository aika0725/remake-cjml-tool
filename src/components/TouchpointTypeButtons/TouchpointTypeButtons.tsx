import React from 'react'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { FieldArrayRenderProps } from 'formik'
import {
  actionInitialvalues,
  communicationInitialvalues,
  TouchpointType,
} from '../../interfaces/Touchpoint'
import AddIcon from '@mui/icons-material/Add'

type Props = {
  arrayHelpers: FieldArrayRenderProps
}
const TouchpointTypeButtons = (props: Props) => {
  const handleClick = (touchpointType: TouchpointType) => {
    if (touchpointType === TouchpointType.Action) {
      const touchpoint = { ...actionInitialvalues, type: touchpointType }
      props.arrayHelpers.push(touchpoint)
    } else {
      const touchpoint = { ...communicationInitialvalues, type: touchpointType }
      props.arrayHelpers.push(touchpoint)
    }
  }

  return (
    <div>
      <Stack className='touchpoint-types' spacing={2} direction='row'>
        <Button
          variant='text'
          onClick={() => handleClick(TouchpointType.Action)}
          startIcon={<AddIcon />}
        >
          Create Action
        </Button>
        <Button
          variant='text'
          onClick={() => handleClick(TouchpointType.Communication)}
          startIcon={<AddIcon />}
        >
          Create Communication point
        </Button>
      </Stack>
    </div>
  )
}

export default TouchpointTypeButtons
