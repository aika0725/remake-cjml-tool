import React from 'react'
import { IActor } from '../../../interfaces/Actor'
import {
  IAction,
  ICommunication,
  ITouchpoint,
  TouchpointType,
} from '../../../interfaces/Touchpoint'
import ActionBox from '../ActionBox/ActionBox'
import CommunicationBox from '../CommunicationBox/CommunicationBox'

import * as D from '../diagram.style'

type Props = {
  actor: IActor
  touchpoint: ITouchpoint
}

const TouchpointInfo = (props: Props) => {
  const actionDescription = props.touchpoint as IAction
  const communicationDescription = props.touchpoint as ICommunication
  return (
    <>
      {props.touchpoint.type === TouchpointType.Action ? (
        <ActionBox
          actorID={props.actor.id}
          initiatorID={actionDescription.initiatorID}
          description={actionDescription.touchpointDescription.actionDescription}
        />
      ) : (
        <CommunicationBox
          actorID={props.actor.id}
          senderID={communicationDescription.senderID}
          senderDescription={communicationDescription.touchpointDescription.senderDescription}
          receiverID={communicationDescription.receiverID}
          recieverDescription={communicationDescription.touchpointDescription.receiverDescription}
          channel={communicationDescription.touchpointDescription.channel}
        />
      )}
    </>
  )
}

export default TouchpointInfo
