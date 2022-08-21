import React, { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const SelectRole = () => {
  const [role, setRole] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 160, pl: 7, pt: 1 }}>
      <FormControl fullWidth required>
        <InputLabel id='select-actor-role'>Actor Role</InputLabel>
        <Select
          labelId='select-actor-role'
          id='role-select'
          value={role}
          label='Actor Role'
          onChange={handleChange}
          sx={{ height: 50 }}
        >
          <MenuItem value={'customer'}>Customer/User</MenuItem>
          <MenuItem value={'service-provider'}>Service Provider</MenuItem>
          <MenuItem value={'attacker'}>Attacker</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export default SelectRole
