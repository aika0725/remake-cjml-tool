import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { IFormData } from '../../../../../interfaces/FormData'
import { FieldArrayRenderProps, useFormikContext } from 'formik'
import { FormHelperText, ThemeProvider, Typography } from '@mui/material'

import ActorRadios from '../../../components/ActorRadios/ActorRadios'
import SecurityRadios from '../../../components/SecurityRadios'
import * as S from '../../../../Styles/FormCard'
import GenericInputTextField from '../../../../generic-components/GenericInputTextField/GenericInputTextField'
import DeleteButton from '../../../../generic-components/DeleteButton/DeleteButton'
import { IAction, TouchpointType } from '../../../../../interfaces/Touchpoint'

type Props = {
  index: number
  arrayHelpers: FieldArrayRenderProps
}

const ActionCard = (props: Props) => {
  const { values, handleChange, errors } = useFormikContext<IFormData>()
  const touchpointAction = values.touchpoints[props.index] as unknown as IAction

  const error = () => {
    const touchpointError = (errors as unknown as IFormData).touchpoints?.[props.index] as IAction
    return touchpointError
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getSafeError = (err: boolean | string): any => {
    if (err !== undefined) {
      return err
    } else {
      return false
    }
  }

  return (
    <div>
      <ThemeProvider theme={S.FontTheme}>
        <S.FormCard>
          <S.CardHeader>
            <Typography variant='h6'>Action-Touchpoint #{props.index + 1}</Typography>
            <DeleteButton arrayHelpers={props.arrayHelpers} index={props.index} />{' '}
          </S.CardHeader>
          <S.Row>
            <FormControl error={error() && Boolean(error().initiatorID)} variant='standard'>
              <FormLabel id='senderName' sx={{ fontSize: '13px', color: '#000' }}>
                Who did this action? Choose the initiator *
              </FormLabel>
              <ActorRadios
                name={`touchpoints[${props.index}].initiatorID`}
                index={props.index}
                type={TouchpointType.Action}
              />
              <FormHelperText>{error() && error().initiatorID}</FormHelperText>
            </FormControl>
          </S.Row>
          <S.Row>
            <GenericInputTextField
              multiline
              mandatory
              id='0'
              name={`touchpoints[${props.index}].touchpointDescription.actionDescription`}
              label='Action description'
              value={touchpointAction.touchpointDescription.actionDescription}
              handleChange={handleChange}
              error={
                error() &&
                error().touchpointDescription &&
                getSafeError(Boolean(error().touchpointDescription.actionDescription))
              }
              helperText={
                error() &&
                error().touchpointDescription &&
                error().touchpointDescription.actionDescription
              }
            />
          </S.Row>
          <S.Row>
            <SecurityRadios
              name={`touchpoints[${props.index}].touchpointDescription.riskCategory`}
            />
          </S.Row>
        </S.FormCard>
      </ThemeProvider>
    </div>
  )
}

export default ActionCard
