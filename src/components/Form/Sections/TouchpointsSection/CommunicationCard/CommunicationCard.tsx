import { FormControl, FormLabel, Typography } from '@material-ui/core'
import { MenuItem, TextField, ThemeProvider } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { FieldArrayRenderProps, useFormikContext } from 'formik'
import React from 'react'

import { IFormData } from '../../../../../interfaces/FormData'
import {
  ICommunication,
  TouchpointChannels,
  TouchpointType,
} from '../../../../../interfaces/Touchpoint'
import ActorRadios from '../../../components/ActorRadios/ActorRadios'
import DeleteButton from '../../../../generic-components/DeleteButton/DeleteButton'
import GenericInputTextField from '../../../../generic-components/GenericInputTextField/GenericInputTextField'
import SecurityRadios from '../../../components/SecurityRadios'
import * as S from '../../../../Styles/FormCard'

type Props = {
  index: number
  arrayHelpers: FieldArrayRenderProps
}

const CommunicationCard = (props: Props) => {
  const { values, handleChange, touched, errors, setFieldValue } = useFormikContext<IFormData>()
  const [date, setDate] = React.useState<Date | null>(null)

  const handleChangeDate = (newDate: Date | null) => {
    setDate(newDate)
    setFieldValue(`touchpoints[${props.index}].touchpointDescription.time`, date)
  }
  const touchpointCommunication = values.touchpoints[props.index] as unknown as ICommunication
  const error = () => {
    const touchpointError = (errors as unknown as IFormData).touchpoints?.[
      props.index
    ] as ICommunication
    return touchpointError
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
              <ActorRadios
                name={`touchpoints[${props.index}].senderID`}
                index={props.index}
                type={TouchpointType.Communication}
                entity={'sender'}
              />
            </FormControl>
          </S.Row>
          <S.Row>
            <GenericInputTextField
              mandatory
              id='0'
              name={`touchpoints[${props.index}].touchpointDescription.senderDescription`}
              label='Describe sender activity within 50 characters'
              value={touchpointCommunication.touchpointDescription.senderDescription}
              handleChange={handleChange}
              multiline
              error={
                touched.touchpoints && Boolean(error().touchpointDescription.senderDescription)
              }
              helperText={touched.touchpoints && error().touchpointDescription.senderDescription}
            />
          </S.Row>
          <S.Row>
            <GenericInputTextField
              mandatory
              id='0'
              name={`touchpoints[${props.index}].touchpointDescription.channel`}
              select
              label='Communication channel'
              value={touchpointCommunication.touchpointDescription.channel}
              handleChange={handleChange}
              error={
                // Need to check why this needs type conversion o unknown
                touched.actors && Boolean(error().touchpointDescription.senderDescription)
              }
              helperText={touched.actors && error().touchpointDescription.senderDescription}
            >
              <MenuItem value={TouchpointChannels.SMS}>SMS</MenuItem>
              <MenuItem value={TouchpointChannels.Email}>Email</MenuItem>
              <MenuItem value={TouchpointChannels.Phone}>Phone</MenuItem>
              <MenuItem value={TouchpointChannels.FaceToFace}>Face to face</MenuItem>
              <MenuItem value={TouchpointChannels.Website}>Website</MenuItem>
              <MenuItem value={TouchpointChannels.Letter}>Letter</MenuItem>
              <MenuItem value={TouchpointChannels.Payment}>Payment</MenuItem>
              <MenuItem value={TouchpointChannels.SelfServiceMachine}>
                Self service machine
              </MenuItem>
            </GenericInputTextField>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                label='communication start time'
                value={date}
                onChange={handleChangeDate}
                renderInput={(params) => {
                  return (
                    <TextField
                      name={`touchpoints[${props.index}].touchpointDescription.time`}
                      {...params}
                    />
                  )
                }}
              />
            </LocalizationProvider>
          </S.Row>
          <S.Row>
            <SecurityRadios
              name={`touchpoints[${props.index}].touchpointDescription.senderRiskCategory`}
            />
          </S.Row>
          <S.Row>
            <FormControl>
              <FormLabel id='receiverName'>
                <S.BlacLabelTextTypography>
                  Choose the <Typography variant='button'>Receiver</Typography>*
                </S.BlacLabelTextTypography>
              </FormLabel>
              <ActorRadios
                name={`touchpoints[${props.index}].receiverID`}
                index={props.index}
                type={TouchpointType.Communication}
                entity={'receiver'}
              />
            </FormControl>
          </S.Row>
          <S.Row>
            <GenericInputTextField
              multiline
              mandatory
              id='0'
              name={`touchpoints[${props.index}].touchpointDescription.receiverDescription`}
              label='Describe the receiver activity within 50 chacters'
              value={touchpointCommunication.touchpointDescription.receiverDescription}
              handleChange={handleChange}
              error={
                touched.touchpoints && Boolean(error().touchpointDescription.receiverDescription)
              }
              helperText={touched.touchpoints && error().touchpointDescription.receiverDescription}
            />
          </S.Row>
          <S.Row>
            <SecurityRadios
              name={`touchpoints[${props.index}].touchpointDescription.receiverRiskCategory`}
            />
          </S.Row>
        </S.FormCard>
      </ThemeProvider>
    </div>
  )
}

export default CommunicationCard
