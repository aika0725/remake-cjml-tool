import React, { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const CommunicationChannel = () => {
  const [channel, setChannel] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setChannel(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 160, pl: 7, pt: 1 }}>
      <FormControl fullWidth required>
        <InputLabel id='select-channel'>Communication Channel</InputLabel>
        <Select
          labelId='select-channel'
          id='channel-select'
          value={channel}
          label='Communication Channel'
          onChange={handleChange}
          sx={{ height: 50 }}
        >
          <MenuItem value={'phone'}>Phone</MenuItem>
          <MenuItem value={'face-to-face'}>Face to face</MenuItem>
          <MenuItem value={'SMS'}>SMS</MenuItem>
          <MenuItem value={'email'}>Email</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export default CommunicationChannel
