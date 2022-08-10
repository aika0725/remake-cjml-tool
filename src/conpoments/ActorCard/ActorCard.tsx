import React from 'react'

import { useFormikContext } from 'formik'
import { TextField, MenuItem } from '@material-ui/core'
import { IFormData } from '../../interfaces/FormData'

type Props = {
  name: string
  index: number
  role: string
}

const ActorCard = (props: Props) => {
  const { values, handleChange, touched, errors } = useFormikContext<IFormData>()

  return (
    <div>
      <TextField
        fullWidth
        id={props.name}
        name={props.name}
        label='Actor name'
        value={values.actors[props.index].actorName}
        onChange={handleChange}
        error={
          touched.actors &&
          Boolean((errors as unknown as IFormData).actors?.[props.index]?.actorName)
        }
        helperText={
          touched.actors && (errors as unknown as IFormData).actors?.[props.index]?.actorName
        }
      />
      <TextField
        id={props.role}
        name={props.role}
        select
        label='Actor role'
        value={values.actors[props.index].actorRole}
        onChange={handleChange}
        margin='normal'
        error={
          // Need to check why this needs type conversion o unknown
          touched.actors &&
          Boolean((errors as unknown as IFormData).actors?.[props.index]?.actorRole)
        }
        helperText={
          touched.actors && (errors as unknown as IFormData).actors?.[props.index]?.actorRole
        }
        fullWidth
      >
        <MenuItem value={'customer'}>Customer/User</MenuItem>
        <MenuItem value={'service-provider'}>Service Provider</MenuItem>
        <MenuItem value={'attacker'}>Attacker</MenuItem>
      </TextField>
    </div>
  )
}

export default ActorCard
