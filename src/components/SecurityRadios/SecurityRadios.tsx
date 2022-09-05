import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { IFormData } from '../../interfaces/FormData'
import { useFormikContext } from 'formik'
import * as S from '../Styles/FormCard'
import { RiskCategory } from '../../interfaces/Touchpoint'
type Props = {
  name: string
}

const SecurityRadios = (props: Props) => {
  const { handleChange } = useFormikContext<IFormData>()

  return (
    <FormControl>
      <FormLabel id='risk-options'>
        <S.BlacLabelTextTypography>
          Is this action a threat or unwanted incident?
        </S.BlacLabelTextTypography>
      </FormLabel>
      <RadioGroup row name={props.name} onChange={handleChange}>
        <FormControlLabel value={RiskCategory.Threat} control={<Radio />} label='Threat' />
        <FormControlLabel
          value={RiskCategory.Incident}
          control={<Radio />}
          label='Unwanted incident'
        />
        <FormControlLabel value={RiskCategory.None} control={<Radio />} label='Neither of them' />
      </RadioGroup>
    </FormControl>
  )
}
export default SecurityRadios
