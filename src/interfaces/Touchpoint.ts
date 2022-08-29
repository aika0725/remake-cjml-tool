export interface ITouchpoint {
  senderID: number
  receiverID?: number | undefined
  type: TouchpointType | ''
  touchpointDescription: {
    channel?: TouchpoinTChannels | ''
    senderDescription: string
    senderRiskCategory?: string
    receiverDescription?: string
    receiverRiskCategory?: string
    time?: Date | null
  }
}

export const touchpointInitialValues: ITouchpoint = {
  senderID: 0,
  receiverID: undefined,
  type: '',
  touchpointDescription: {
    channel: '',
    senderDescription: '',
    senderRiskCategory: '',
    time: null,
    receiverDescription: '',
    receiverRiskCategory: '',
  },
}

export enum TouchpointType {
  Action = 'action',
  Communication = 'communication',
}

export enum TouchpoinTChannels {
  SMS = 'Sms',
  Email = 'Email',
  Phone = 'Phone',
  Face2Face = 'Face to face',
}
