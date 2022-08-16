import React, { ChangeEvent } from 'react'
import { TextField } from '@material-ui/core'

type Props = {
  id: string
  name: string
  label: string
  value: string | undefined
  //   onChange?: StandardInputProps['onChange'];
  handleChange: (e: string | ChangeEvent<any>) => void
  error: boolean | undefined
  helperText: string | undefined
  mandatory?: boolean
  select?: boolean
  margin?: 'none' | 'dense' | 'normal'
  children?: React.ReactNode
}

const GenericInputTextField = (props: Props) => {
  //   const { values, handleChange, touched, errors } = useFormikContext<IFormData>()
  return (
    <TextField
      fullWidth
      id={props.name}
      name={props.name}
      label={props.label + (props.mandatory ? '*' : '')}
      value={props.value}
      onChange={props.handleChange}
      error={props.error}
      helperText={props.helperText}
      select={props.select ? true : false}
      margin={props.margin}
    >
      {props.children}
    </TextField>
  )
}

export default GenericInputTextField
