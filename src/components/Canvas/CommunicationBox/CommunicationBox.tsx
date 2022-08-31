import { useFormikContext } from 'formik'
import React from 'react'
import { IFormData } from '../../../interfaces/FormData'
import Arrow from '../Arrow/Arrow'

import * as D from '../diagram.style'

type Props = {
  actorID: string
  senderID: string
  receiverID: string
  senderDescription: string
  recieverDescription: string
  channel: string
}

export enum ArrowDirection {
  Down = 'down',
  Up = 'up',
}

export interface ArrowInfo {
  direction: ArrowDirection
  length: string
}

const CommunicationBox = ({
  actorID,
  senderID,
  receiverID,
  senderDescription,
  recieverDescription,
  channel,
}: Props) => {
  const { values } = useFormikContext<IFormData>()

  const arrowPosition = (): ArrowInfo => {
    const indexSender = values.actors.map((actor) => actor.id).indexOf(senderID)
    const indexReceiver = values.actors.map((actor) => actor.id).indexOf(receiverID)

    const arrowDirection: ArrowDirection =
      indexSender - indexReceiver < 0 ? ArrowDirection.Down : ArrowDirection.Up

    const arrowLength =
      arrowDirection === ArrowDirection.Up
        ? (indexSender - indexReceiver).toString()
        : (indexReceiver - indexSender).toString()

    return {
      direction: arrowDirection,
      length: arrowLength,
    }
  }

  if (actorID === senderID) {
    return (
      <D.SwimlaneSender>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{senderDescription}</D.CommunicationContent>
        <Arrow direction={arrowPosition().direction} length={arrowPosition().length} />
      </D.SwimlaneSender>
    )
  } else if (actorID === receiverID) {
    return (
      <D.SwimlaneReceiver>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{recieverDescription}</D.CommunicationContent>
      </D.SwimlaneReceiver>
    )
  } else return <D.TransparentBox />
}

export default CommunicationBox
