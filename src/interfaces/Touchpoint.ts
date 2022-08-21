export interface ITouchpoint {
  type: TouchpointType | ''
  channel?: TouchpoinTChannels | ''
  senderName: string
  senderDescription: string
  senderRiskCategory?: string
  receiverName?: string
  receiverDescription?: string
  receiverRiskCategory?: string
  time?: Date | null
}

export const touchpointInitialValues: ITouchpoint = {
  type: '',
  channel: '',
  senderName: '',
  senderDescription: '',
  senderRiskCategory: '',
  time: null,
  receiverName: '',
  receiverDescription: '',
  receiverRiskCategory: '',
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
