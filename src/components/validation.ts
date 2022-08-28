import * as yup from 'yup'

export const validationSchema = yup.object({
  actors: yup.array().of(
    yup.object({
      actorName: yup.string().required('Actor name is required'),
      actorRole: yup.string().required('Actor role is required'),
    }),
  ),
  touchpoints: yup.array().of(
    yup.object({
      senderName: yup.string().required('Sender/Initiator name is required'),
      senderDescription: yup.string().required('Activity description is required'),
      receiverName: yup.string().required('receiver name is required'),
      receiverDescription: yup.string().required('Activity description is required'),
    }),
  ),
})
