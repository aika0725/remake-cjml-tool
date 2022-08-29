import React from 'react'

import * as D from '../diagram.style'

type Props = {
  actorID: number
  senderID: number
  description: string
}

const ActionBox = ({ actorID, senderID, description }: Props) => {
  console.log('actor:' + typeof actorID)
  console.log('sender:' + typeof senderID)
  console.log(senderID === actorID)
  if (actorID === senderID) {
    return <D.SwimeLineAction>{description}</D.SwimeLineAction>
  } else return <D.TransparentBox>test</D.TransparentBox>
}

export default ActionBox
