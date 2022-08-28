import { FormControl, FormLabel, Typography } from '@material-ui/core'
import { FieldArrayRenderProps, Formik, useFormikContext } from 'formik'
import React from 'react'

import { IFormData } from '../../interfaces/FormData'
import ActorRadios from '../ActorRadios/ActorRadios'
import GenericInputTextField from '../GenericInputTextField/GenericInputTextField'
import SecurityRadios from '../SecurityRadios/SecurityRadios'

import * as S from '../Styles/FormCard'
import DeleteButton from '../DeleteButton/DeleteButton'
import { MenuItem, TextField, ThemeProvider } from '@mui/material'
import { TouchpoinTChannels } from '../../interfaces/Touchpoint'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

type Props = {
  index: number
  arrayHelpers: FieldArrayRenderProps
}

const CommunicationCard = (props: Props) => {
  const { values, handleChange, touched, errors, setFieldValue } = useFormikContext<IFormData>()
  const [date, setDate] = React.useState<Date | null>(null)

  const handleChangeDate = (newDate: Date | null) => {
    console.log('time picker')
    setDate(newDate)
    setFieldValue(`touchpoints[${props.index}].time`, date)
  }
  return (
    <div>
      <ThemeProvider theme={S.FontTheme}>
        <S.FormCard>
          <S.CardHeader>
            <Typography variant='h6'>Communication point-Touchpoint #{props.index + 1}</Typography>
            <DeleteButton arrayHelpers={props.arrayHelpers} index={props.index} />{' '}
          </S.CardHeader>
          <S.Row>
            <FormControl>
              <FormLabel id='senderName'>
                <S.BlacLabelTextTypography>
                  Who started this communication? Choose the{' '}
                  <Typography variant='button'>sender</Typography>*
                </S.BlacLabelTextTypography>
              </FormLabel>
              <ActorRadios name={`touchpoints[${props.index}].senderName`} />
            </FormControl>
          </S.Row>
          <S.Row>
            <GenericInputTextField
              mandatory
              id='0'
              name={`touchpoints[${props.index}].senderDescription`}
              label='Describe sender activity within 50 characters'
              value={values.touchpoints[props.index].senderDescription}
              handleChange={handleChange}
              multiline
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
            <GenericInputTextField
              mandatory
              id='0'
              name={`touchpoints[${props.index}].channel`}
              select
              label='Communication channel'
              value={values.touchpoints[props.index].channel}
              handleChange={handleChange}
              error={
                // Need to check why this needs type conversion o unknown
                touched.actors &&
                Boolean(
                  (errors as unknown as IFormData).touchpoints?.[props.index]?.senderDescription,
                )
              }
              helperText={
                touched.actors &&
                (errors as unknown as IFormData).touchpoints?.[props.index]?.senderDescription
              }
            >
              <MenuItem value={TouchpoinTChannels.SMS}>SMS</MenuItem>
              <MenuItem value={TouchpoinTChannels.Email}>Email</MenuItem>
              <MenuItem value={TouchpoinTChannels.Phone}>Phone</MenuItem>
              <MenuItem value={TouchpoinTChannels.Face2Face}>Face to face</MenuItem>
            </GenericInputTextField>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                label='communication start time'
                value={date}
                onChange={handleChangeDate}
                renderInput={(params: any) => {
                  return <TextField name={`touchpoints[${props.index}].time`} {...params} />
                }}
              />
            </LocalizationProvider>
          </S.Row>
          <S.Row>
            <SecurityRadios name={`touchpoints[${props.index}].senderRiskCategory`} />
          </S.Row>
          <S.Row>
            <FormControl>
              <FormLabel id='receiverName'>
                <S.BlacLabelTextTypography>
                  Choose the <Typography variant='button'>Receiver</Typography>*
                </S.BlacLabelTextTypography>
              </FormLabel>
              <ActorRadios name={`touchpoints[${props.index}].receiverName`} />
            </FormControl>
          </S.Row>
          <S.Row>
            <GenericInputTextField
              multiline
              mandatory
              id='0'
              name={`touchpoints[${props.index}].receiverDescription`}
              label='Describe the receiver activity within 50 chacters'
              value={values.touchpoints[props.index].receiverDescription}
              handleChange={handleChange}
              error={
                touched.touchpoints &&
                Boolean(
                  (errors as unknown as IFormData).touchpoints?.[props.index]?.receiverDescription,
                )
              }
              helperText={
                touched.touchpoints &&
                (errors as unknown as IFormData).touchpoints?.[props.index]?.receiverDescription
              }
            />
          </S.Row>
          <S.Row>
            <SecurityRadios name={`touchpoints[${props.index}].receiverRiskCategory`} />
          </S.Row>
        </S.FormCard>
      </ThemeProvider>
    </div>
  )
}

export default CommunicationCard