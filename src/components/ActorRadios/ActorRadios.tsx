import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { IFormData } from '../../interfaces/FormData'
import { useFormikContext } from 'formik'

type Props = {
  name: string
  // id:number
}

const ActorRadios = (props: Props) => {
  const { values, handleChange } = useFormikContext<IFormData>()

  return (
    <RadioGroup row name={props.name} onChange={handleChange}>
      {values.actors.map((actor, index) => {
        return (
          <FormControlLabel
            key={index}
            value={actor.id}
            control={<Radio />}
            label={`${actor.actorName}`}
          />
        )
      })}
    </RadioGroup>
  )
}
export default ActorRadios
