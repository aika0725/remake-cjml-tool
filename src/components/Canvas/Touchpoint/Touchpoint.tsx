import React, { useLayoutEffect, useRef, useState } from 'react'
import { IActor } from '../../../interfaces/Actor'
import { ITouchpoint, TouchpointType } from '../../../interfaces/Touchpoint'
import ActionBox from '../ActionBox/ActionBox'
import Arrow from '../Arrow/Arrow'
import CommunicationBox from '../CommunicationBox/CommunicationBox'

import * as D from '../diagram.style'

type Props = {
  actor: IActor
  touchpoint: ITouchpoint
}

const Touchpoint = (props: Props) => {
  return (
    <>
      {props.touchpoint.type === TouchpointType.Action ? (
        <ActionBox
          actorID={props.actor.id}
          senderID={props.touchpoint.senderID}
          description={props.touchpoint.touchpointDescription.senderDescription}
        />
      ) : (
        <CommunicationBox
          actorID={props.actor.id}
          senderID={props.touchpoint.senderID}
          senderDescription={props.touchpoint.touchpointDescription.senderDescription}
          receiverID={props.touchpoint.receiverID}
          recieverDescription={props.touchpoint.touchpointDescription.receiverDescription}
          channel={props.touchpoint.touchpointDescription.channel}
        />
      )}
    </>
  )
}

export default Touchpoint
