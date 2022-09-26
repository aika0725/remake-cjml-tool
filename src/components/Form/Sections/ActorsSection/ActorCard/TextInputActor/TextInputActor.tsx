import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'

const TextInput = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant='standard'>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField required id='name' name='name' label='Actor Name' variant='standard' />
        </Box>
      </FormControl>
    </Box>
  )
}

export default TextInput
