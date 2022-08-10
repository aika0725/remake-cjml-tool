import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const ActionCard = () => {
  return (
    <div>
      <h3>Action </h3>
      <FormControl>
        <FormLabel id='demo-row-radio-buttons-group-label'>Initiator</FormLabel>
        <RadioGroup row name='actor-group'>
          <FormControlLabel value='female' control={<Radio />} label='A' />
          <FormControlLabel value='male' control={<Radio />} label='B' />
          <FormControlLabel value='other' control={<Radio />} label='C' />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default ActionCard
