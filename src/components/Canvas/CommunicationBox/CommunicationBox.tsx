import React from 'react'

import * as D from '../diagram.style'

type Props = {
  actorID: number
  senderID: number | undefined
  receiverID: number | undefined
  senderDescription: string
  recieverDescription?: string
  channel?: string
}

const CommunicationBox = ({
  actorID,
  senderID,
  receiverID,
  senderDescription,
  recieverDescription,
  channel,
}: Props) => {
  if (actorID === senderID) {
    return (
      <D.SwimlaneSender>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{senderDescription}</D.CommunicationContent>
        {/* <Arrow direction={arrowDirection} /> */}
      </D.SwimlaneSender>
    )
  } else if (actorID === receiverID) {
    return (
      <D.SwimlaneReceiver>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{recieverDescription}</D.CommunicationContent>
        {/* {isSenderAbove() ? <Arrow direction={'up'} /> : <Arrow direction={'down'} />} */}
      </D.SwimlaneReceiver>
    )
  } else return <D.TransparentBox />
}

export default CommunicationBox
