import * as yup from 'yup'
import { ITouchpoint, TouchpointType } from '../interfaces/Touchpoint'

export const validationSchema = yup.object({
  actors: yup.array().of(
    yup.object({
      actorName: yup.string().required('Actor name is required'),
      actorRole: yup.string().required('Actor role is required'),
    }),
  ),
  touchpoints: yup.array().of(
    yup.lazy(
      (item: ITouchpoint) => (item.type === TouchpointType.Action ? action : communicationPoint),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any,
  ),
})

const action = yup.object({
  initiatorID: yup.string().required('An initiator is required'),
  touchpointDescription: yup.object({
    actionDescription: yup.string().required('Action description is required'),
  }),
})

const communicationPoint = yup.object({
  senderID: yup.string().required('A sender is required'),
  receiverID: yup.string().required('A receiver is required'),
  touchpointDescription: yup.object({
    channel: yup.string().required('channel is required'),
    senderDescription: yup.string().required('Sender description is required'),
    receiverDescription: yup.string().required('Receiver description is required'),
  }),
})
