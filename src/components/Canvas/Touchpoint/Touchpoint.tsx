import React from 'react'
import { IActor } from '../../../interfaces/Actor'
import { IFormData } from '../../../interfaces/FormData'
import { ITouchpoint } from '../../../interfaces/Touchpoint'
import { FormContext } from '../../Context/FormContext'
import ActorInfo from '../ActorInfo/ActorInfo'
import * as D from '../diagram.style'

type Props = {
  actor: IActor
  touchpoint: ITouchpoint
}

const generateAction = (actorName: string, senderName: string, description: string) => {
  if (actorName === senderName) {
    return <D.SwimeLineAction>{description}</D.SwimeLineAction>
  } else return <D.TransparentBox />
}

const generateCommunication = () => {
  return <D.SwimeLineAction>communiction</D.SwimeLineAction>
}

const Touchpoint = (props: Props) => {
  return (
    <>
      {/* {props.actor.actorName === props.touchpoint.senderName ? (
        <D.SwimeLineAction>{}</D.SwimeLineAction>
      ) : (
        <D.TransparentBox />
      )} */}
      {props.touchpoint.type === 'action'
        ? generateAction(
            props.actor.actorName,
            props.touchpoint.senderName,
            props.touchpoint.senderDescription,
          )
        : generateCommunication()}
    </>
  )
}

export default Touchpoint
