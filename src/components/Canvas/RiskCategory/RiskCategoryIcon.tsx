import React from 'react'
import { RiskCategory } from '../../../interfaces/Touchpoint'
import { Icon } from './styles'

type Props = {
  risk: RiskCategory
}

const RiskCategoryIcon = ({ risk }: Props) => {
  return (
    <>
      {risk !== RiskCategory.None && (
        <Icon>
          <img src={`icons/risk-categories/${risk}.png`} />
        </Icon>
      )}
    </>
  )
}

export default RiskCategoryIcon
