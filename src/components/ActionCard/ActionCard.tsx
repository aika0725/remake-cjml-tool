import React from 'react'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { IFormData } from '../../interfaces/FormData'
import { FieldArrayRenderProps, useFormikContext } from 'formik'
import { ThemeProvider, Typography } from '@mui/material'

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

  return (
    <div>
      <ThemeProvider theme={S.FontTheme}>
        <S.FormCard>
          <S.CardHeader>
            <Typography variant='h6'>Action-Touchpoint #{props.index + 1}</Typography>
            <DeleteButton arrayHelpers={props.arrayHelpers} index={props.index} />{' '}
          </S.CardHeader>
          <S.Row>
            <FormControl>
              <FormLabel id='senderName'>
                <S.BlacLabelTextTypography>
                  Who did this action? Choose the{' '}
                  <Typography variant='button' fontWeight={600}>
                    initiator
                  </Typography>
                  *
                </S.BlacLabelTextTypography>
              </FormLabel>
              <ActorRadios name={`touchpoints[${props.index}].senderName`} />
            </FormControl>
          </S.Row>
          <S.Row>
            <GenericInputTextField
              multiline
              mandatory
              id='0'
              name={`touchpoints[${props.index}].senderDescription`}
              label='Action description'
              value={values.touchpoints[props.index].senderDescription}
              handleChange={handleChange}
              error={
                touched.touchpoints &&
                Boolean(
                  (errors as unknown as IFormData).touchpoints?.[props.index]?.senderDescription,
                )
              }
              helperText={
                touched.touchpoints &&
                (errors as unknown as IFormData).touchpoints?.[props.index]?.senderDescription
              }
            />
          </S.Row>
          <S.Row>
            <SecurityRadios name={`touchpoints[${props.index}].senderRiskCategory`} />
          </S.Row>
        </S.FormCard>
      </ThemeProvider>
    </div>
  )
}

export default ActionCard
