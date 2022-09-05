import { Typography } from '@mui/material'
import { useFormikContext } from 'formik'
import React from 'react'
import { IFormData } from '../../../interfaces/FormData'
import { CommunicationRole, ICommunication } from '../../../interfaces/Touchpoint'
import Arrow from '../Arrow/Arrow'

import * as D from '../diagram.style'
import RiskCategoryIcon from '../RiskCategory'
import * as S from './styles'

export enum ArrowDirection {
  Down = 'down',
  Up = 'up',
}

export interface ArrowInfo {
  direction: ArrowDirection
  length: number
}

type Props = ICommunication & { actorID: string }

const CommunicationBox = ({ actorID, senderID, receiverID, touchpointDescription }: Props) => {
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

  const description =
    role === CommunicationRole.Sender
      ? touchpointDescription.senderDescription
      : touchpointDescription.receiverDescription

  return (
    <>
      {role ? (
        <S.CommunicationBoxStyled role={role}>
          <RiskCategoryIcon
            risk={
              role === CommunicationRole.Receiver
                ? touchpointDescription.receiverRiskCategory
                : touchpointDescription.senderRiskCategory
            }
          />
          <D.ChannelImage>
            <img src={`icons/channels/${touchpointDescription.channel}.png`} />
          </D.ChannelImage>
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
