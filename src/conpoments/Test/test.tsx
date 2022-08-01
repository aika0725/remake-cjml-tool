import React from 'react'

import { useFormikContext } from 'formik'
import { TextField, MenuItem } from '@material-ui/core'
import { IFormData } from '../../interfaces/FormData'

const Test = () => {
  const { values, handleChange, touched, errors } = useFormikContext<IFormData>()

  return (
    <div>
      <TextField
        fullWidth
        id='actors[0].actorName'
        name='actors[0].actorName'
        label='Actor name'
        value={values.actors[0].actorName}
        onChange={handleChange}
        error={touched.actors && Boolean((errors as unknown as IFormData).actors?.[0]?.actorName)}
        helperText={touched.actors && (errors as unknown as IFormData).actors?.[0]?.actorName}
      />
      <TextField
        id='actorRole'
        name='actors[0].actorRole'
        select
        label='Actor role'
        value={values.actors[0].actorRole}
        onChange={handleChange}
        margin='normal'
        error={
          // Need to check why this needs type conversion o unknown
          touched.actors && Boolean((errors as unknown as IFormData).actors?.[0]?.actorRole)
        }
        helperText={touched.actors && (errors as unknown as IFormData).actors?.[0]?.actorRole}
        fullWidth
      >
        <MenuItem value={'customer'}>Customer/User</MenuItem>
        <MenuItem value={'service-provider'}>Service Provider</MenuItem>
        <MenuItem value={'attacker'}>Attacker</MenuItem>
      </TextField>
    </div>
  )
}

export default Test
