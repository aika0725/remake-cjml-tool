import { Typography } from '@mui/material'
import { useFormikContext } from 'formik'
import React from 'react'
import { IFormData } from '../../../interfaces/FormData'
import Arrow from '../Arrow/Arrow'

import * as D from '../diagram.style'
import * as S from './styles'

type Props = {
  actorID: string
  senderID: string
  receiverID: string
  senderDescription: string
  receiverDescription: string
  channel: string
}

export enum ArrowDirection {
  Down = 'down',
  Up = 'up',
}

export interface ArrowInfo {
  direction: ArrowDirection
  length: number
}

export enum CommunicationRole {
  Sender = 'sender',
  Receiver = 'receiver',
}

const CommunicationBox = ({
  actorID,
  senderID,
  receiverID,
  senderDescription,
  receiverDescription,
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
        ? indexSender - indexReceiver
        : indexReceiver - indexSender

    return {
      direction: arrowDirection,
      length: arrowLength,
    }
  }

  const validateRole = (): CommunicationRole | undefined => {
    switch (actorID) {
      case senderID:
        return CommunicationRole.Sender
      case receiverID:
        return CommunicationRole.Receiver
      default:
        return undefined
    }
  }

  const role = validateRole()

  const description = role === CommunicationRole.Sender ? senderDescription : receiverDescription

  return (
    <>
      {role ? (
        <S.CommunicationBoxStyled role={role}>
          <D.ChannelImage>{channel}</D.ChannelImage>
          <D.CommunicationContent>
            <Typography variant='caption'>{description}</Typography>
          </D.CommunicationContent>
          {role === CommunicationRole.Sender && (
            <Arrow direction={arrowPosition().direction} length={arrowPosition().length} />
          )}
        </S.CommunicationBoxStyled>
      ) : (
        <D.TransparentBox />
      )}
    </>
  )
}

export default CommunicationBox
