import { Divider, FormControl, FormLabel, TextField } from '@material-ui/core'
import { useFormikContext } from 'formik'
import React from 'react'
import { IFormData } from '../../interfaces/FormData'
import ActorRadios from '../ActorRadios/ActorRadios'
import SecurityRadios from '../SecurityRadios/SecurityRadios'

const CommunicationCard = () => {
  const { values, handleChange, touched, errors } = useFormikContext<IFormData>()
  console.log(values)
  return (
    <div>
      <h3>Communication point </h3>
      <FormControl>
        <FormLabel id='senderName'>Initiator/Sender</FormLabel>
        <ActorRadios name='touchpoints[0].senderName' />
      </FormControl>
      <Divider variant='middle' />

      <TextField
        fullWidth
        id='0'
        name='touchpoints[0].senderDescription'
        label='Sender activity description'
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
      <Divider variant='middle' />

      <FormControl>
        <FormLabel id='receiverName'>Receiver</FormLabel>
        <ActorRadios name='touchpoints[0].receiverName' />
      </FormControl>
      <Divider variant='middle' />

      <TextField
        fullWidth
        id='0'
        name='touchpoints[0].receiverDescription'
        label='Receiver activity description'
        value={values.touchpoints[0].receiverDescription}
        onChange={handleChange}
        error={
          touched.touchpoints &&
          Boolean((errors as unknown as IFormData).touchpoints?.[0]?.receiverDescription)
        }
        helperText={
          touched.touchpoints &&
          (errors as unknown as IFormData).touchpoints?.[0]?.receiverDescription
        }
      />
      <Divider variant='middle' />
      <SecurityRadios name='touchpoints[0].receiverRiskCategory' />
    </div>
  )
}

export default CommunicationCard
