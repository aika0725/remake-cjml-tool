import { Typography } from '@mui/material'
import React from 'react'

import * as D from '../diagram.style'

type Props = {
  actorID: string
  initiatorID: string
  description: string
}

const ActionBox = ({ actorID, initiatorID, description }: Props) => {
  console.log(initiatorID === actorID)
  if (actorID === initiatorID) {
    return (
      <D.SwimeLineAction>
        <Typography variant='caption'>{description}</Typography>
      </D.SwimeLineAction>
    )
  } else return <D.TransparentBox />
}

export default ActionBox
