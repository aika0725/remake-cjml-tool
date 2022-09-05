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
        <ActionBox {...actionDescription} actorID={props.actor.id} />
      ) : (
        <CommunicationBox actorID={props.actor.id} {...communicationDescription} />
      )}
    </>
  )
}

export default TouchpointInfo
