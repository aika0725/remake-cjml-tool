import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { IFormData } from '../../interfaces/FormData'
import { useFormikContext } from 'formik'
import { Divider } from '@mui/material'
import { TextField } from '@material-ui/core'
import ActorRadios from '../ActorRadios/ActorRadios'
import SecurityRadios from '../SecurityRadios/SecurityRadios'

const ActionCard = () => {
  const { values, handleChange, touched, errors } = useFormikContext<IFormData>()
  console.log(values)

  return (
    <div>
      <h3>Action </h3>
      <FormControl>
        <FormLabel id='senderName'>Initiator</FormLabel>
        <ActorRadios name='touchpoints[0].senderName' />
      </FormControl>
      <Divider variant='middle' />

      <TextField
        fullWidth
        id='0'
        name='touchpoints[0].senderDescription'
        label='Action description'
        value={values.touchpoints[0].senderDescription}
        onChange={handleChange}
        error={
          touched.touchpoints &&
          Boolean((errors as unknown as IFormData).touchpoints?.[0]?.senderDescription)
        }
        helperText={
          touched.touchpoints &&
          (errors as unknown as IFormData).touchpoints?.[0]?.senderDescription
        }
      />
      <Divider variant='middle' />
      <SecurityRadios name='touchpoints[0].senderRiskCategory' />
    </div>
  )
}

export default ActionCard
