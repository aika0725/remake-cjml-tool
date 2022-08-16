import React from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { IFormData } from '../../interfaces/FormData'
import { FieldArrayRenderProps, useFormikContext } from 'formik'
import { Divider, Typography } from '@mui/material'

import ActorRadios from '../ActorRadios/ActorRadios'
import SecurityRadios from '../SecurityRadios/SecurityRadios'
import * as S from '../Styles/FormCard'
import GenericInputTextField from '../GenericInputTextField/GenericInputTextField'
import DeleteButton from '../DeleteButton/DeleteButton'

type Props = {
  index: number
  arrayHelpers: FieldArrayRenderProps
}

const ActionCard = (props: Props) => {
  const { values, handleChange, touched, errors } = useFormikContext<IFormData>()
  // console.log(values)

  return (
    <div>
      <S.CardTitle>
        <Typography variant='h6'>Action-Touchpoint #{props.index + 1}</Typography>
        <DeleteButton arrayHelpers={props.arrayHelpers} index={props.index} />
      </S.CardTitle>
      <S.TouchpointContainer>
        <FormControl>
          <FormLabel id='senderName'>Who did this action? Choose the initiator</FormLabel>
          <ActorRadios name={`touchpoints[${props.index}].senderName`} />
        </FormControl>
      </S.TouchpointContainer>

      <GenericInputTextField
        mandatory
        id='0'
        name={`touchpoints[${props.index}].senderDescription`}
        label='Action description'
        value={values.touchpoints[props.index].senderDescription}
        handleChange={handleChange}
        error={
          touched.touchpoints &&
          Boolean((errors as unknown as IFormData).touchpoints?.[props.index]?.senderDescription)
        }
        helperText={
          touched.touchpoints &&
          (errors as unknown as IFormData).touchpoints?.[props.index]?.senderDescription
        }
      />

      <Divider variant='middle' />
      <S.TouchpointContainer>
        <SecurityRadios name='touchpoints[props.index].senderRiskCategory' />
      </S.TouchpointContainer>
    </div>
  )
}

export default ActionCard
