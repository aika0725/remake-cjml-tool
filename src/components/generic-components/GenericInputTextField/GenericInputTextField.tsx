import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  id: string
  name: string
  label: string
  value: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (e: string | ChangeEvent<any>) => void

  error?: boolean | undefined
  helperText?: string | undefined
  mandatory?: boolean
  select?: boolean
  margin?: 'none' | 'dense' | 'normal'
  children?: React.ReactNode
  multiline?: boolean
}

const GenericInputTextField = (props: Props) => {
  return (
    <TextField
      fullWidth
      id={props.name}
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.handleChange}
      error={props.error}
      helperText={props.helperText}
      select={props.select ? true : false}
      margin={props.margin}
      multiline={props.multiline}
      required={props.mandatory}
    >
      {props.children}
    </TextField>
  )
}

export default GenericInputTextField
