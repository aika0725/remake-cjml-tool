import React from 'react'

import { useFormikContext } from 'formik'
import { MenuItem } from '@material-ui/core'
import { IFormData } from '../../interfaces/FormData'
// import * as S from '../Styles/FormCard'
import GenericInputTextField from '../GenericInputTextField/GenericInputTextField'

type Props = {
  name: string
  index: number
  role: string
}

const ActorCard = (props: Props) => {
  const { values, handleChange, touched, errors } = useFormikContext<IFormData>()
  console.log(props.name)
  return (
    <>
      <GenericInputTextField
        id={props.name}
        name={props.name}
        label='Actor name'
        value={values.actors[props.index].actorName}
        handleChange={handleChange}
        error={
          touched.actors &&
          Boolean((errors as unknown as IFormData).actors?.[props.index]?.actorName)
        }
        helperText={
          touched.actors && (errors as unknown as IFormData).actors?.[props.index]?.actorName
        }
        mandatory
      ></GenericInputTextField>

      <GenericInputTextField
        mandatory
        id={props.role}
        name={props.role}
        select
        label='Actor role'
        value={values.actors[props.index].actorRole}
        handleChange={handleChange}
        error={
          // Need to check why this needs type conversion o unknown
          touched.actors &&
          Boolean((errors as unknown as IFormData).actors?.[props.index]?.actorRole)
        }
        helperText={
          touched.actors && (errors as unknown as IFormData).actors?.[props.index]?.actorRole
        }
      >
        <MenuItem value={'customer'}>Customer/User</MenuItem>
        <MenuItem value={'service-provider'}>Service Provider</MenuItem>
        <MenuItem value={'attacker'}>Attacker</MenuItem>
      </GenericInputTextField>
    </>
  )
}

export default ActorCard
