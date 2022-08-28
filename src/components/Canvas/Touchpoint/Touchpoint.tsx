import React, { useLayoutEffect, useRef, useState } from 'react'
import { IActor } from '../../../interfaces/Actor'
import { ITouchpoint } from '../../../interfaces/Touchpoint'
import Arrow from '../Arrow/Arrow'

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

const generateCommunication = (
  actorName: string,
  senderName: string,
  senderDescription: string,
  receiverName?: string,
  recieverDescription?: string,
  channel?: string,
) => {
  const senderBoxRef = useRef<HTMLDivElement>(null)
  const receiverBoxRef = useRef<HTMLDivElement>(null)

  //   const senderBoxTop = senderBoxRef?.current?.getBoundingClientRect().top
  //   const receiverBoxTop = receiverBoxRef?.current?.getBoundingClientRect().top
  // let isSenderAbove = true
  const [isSenderAbove, setIsSenderAbve] = useState(true)
  useLayoutEffect(() => {
    const senderBox = senderBoxRef.current as any
    const receiverBox = receiverBoxRef.current as any
    // console.log('sender:' + senderBox)
    // console.log('receiver:' + receiverBox)
    // if (senderBox === null) {
    //   setIsSenderAbve(false)
    // } else {
    //   setIsSenderAbve(true)
    // }
    // console.log('in effect:' + isSenderAbove)
    console.log('sender:' + senderBox?.getBoundingClientRect().top)
    console.log('receiver:' + receiverBox?.getBoundingClientRect().top)
  }, [isSenderAbove])

  // const isSenderAbove = () => {
  //   const senderBox = senderBoxRef.current as any
  //   const receiverBox = receiverBoxRef.current as any
  //   // receiverBox === null ? (return false):true
  //   if (receiverBox === null) {
  //     return true
  //   } else {
  //     return false
  //   }
  //   // return false
  // }

  // console.log('sender:' + senderBox?.getBoundingClientRect().top)
  // console.log('receiver:' + receiverBox?.getBoundingClientRect().top)
  console.log('outside:' + isSenderAbove)
  if (actorName === senderName) {
    return (
      <D.SwimlaneSender ref={senderBoxRef}>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{senderDescription}</D.CommunicationContent>
        {isSenderAbove ? <Arrow direction={'up'} /> : <Arrow direction={'down'} />}
      </D.SwimlaneSender>
    )
  } else if (actorName === receiverName) {
    return (
      <D.SwimlaneReceiver ref={receiverBoxRef}>
        <D.ChannelImage>{channel}</D.ChannelImage>
        <D.CommunicationContent>{recieverDescription}</D.CommunicationContent>
        {/* {isSenderAbove() ? <Arrow direction={'up'} /> : <Arrow direction={'down'} />} */}
      </D.SwimlaneReceiver>
    )
  } else return <D.TransparentBox />
}

const Touchpoint = (props: Props) => {
  return (
    <>
      {props.touchpoint.type === 'action'
        ? generateAction(
            props.actor.actorName,
            props.touchpoint.senderName,
            props.touchpoint.senderDescription,
          )
        : generateCommunication(
            props.actor.actorName,
            props.touchpoint.senderName,
            props.touchpoint.senderDescription,
            props.touchpoint.receiverName,
            props.touchpoint.receiverDescription,
            props.touchpoint.channel,
          )}
    </>
  )
}

export default Touchpoint
