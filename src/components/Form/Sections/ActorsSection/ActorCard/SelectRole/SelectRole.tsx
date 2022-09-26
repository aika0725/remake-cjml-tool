import React, { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { ActorRoles } from '../../../../../../interfaces/Actor'

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
          <MenuItem value={ActorRoles.Customer}>Customer/User</MenuItem>
          <MenuItem value={ActorRoles.ServiceProvider}>Service Provider</MenuItem>
          <MenuItem value={ActorRoles.Employee}>Employee</MenuItem>
          <MenuItem value={ActorRoles.Attacker}>Attacker</MenuItem>
          <MenuItem value={ActorRoles.System}>System</MenuItem>
          <MenuItem value={ActorRoles.Bank}>Bank</MenuItem>
          <MenuItem value={ActorRoles.StaffIT}>Staff IT</MenuItem>
          <MenuItem value={ActorRoles.Store}>Store</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export default SelectRole
