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

const CommunicationBox = ({
  actorID,
  senderID,
  receiverID,
  senderDescription,
  recieverDescription,
  channel,
}: Props) => {
  const { values } = useFormikContext<IFormData>()

  const boxesDirectionDistance = () => {
    const indexSender = values.actors.map((actor) => actor.id).indexOf(senderID)
    const indexReceiver = values.actors.map((actor) => actor.id).indexOf(receiverID)
    if (indexSender < indexReceiver) {
      return ['down', (indexReceiver - indexSender).toString()]
    } else {
      return ['up', (indexSender - indexReceiver).toString()]
    }
  }
  if (actorID === senderID) {
    return (
      <D.SwimlaneSender>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{senderDescription}</D.CommunicationContent>
        <Arrow direction={boxesDirectionDistance()[0]} length={boxesDirectionDistance()[1]} />
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
