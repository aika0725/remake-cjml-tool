import { Typography } from '@mui/material'
import React from 'react'
import { IAction } from '../../../interfaces/Touchpoint'

import * as D from '../diagram.style'
import RiskCategoryIcon from '../RiskCategory'

type Props = IAction & { actorID: string }

const ActionBox = ({ actorID, initiatorID, touchpointDescription }: Props) => {
  if (actorID === initiatorID) {
    return (
      <D.SwimeLineAction>
        <RiskCategoryIcon risk={touchpointDescription.riskCategory} />
        <Typography variant='caption'>{touchpointDescription.actionDescription}</Typography>
      </D.SwimeLineAction>
    )
  } else return <D.TransparentBox />
}

export default ActionBox
