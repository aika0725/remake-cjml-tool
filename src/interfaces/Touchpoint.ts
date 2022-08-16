export interface ITouchpoint {
  type: TouchpointType | ''
  channel?: TouchpoinTChannels | ''
  senderName: string
  senderDescription: string
  senderRiskCategory?: string
  receiverName?: string
  receiverDescription?: string
  receiverRiskCategory?: string
  time?: string
}

export const touchpointInitialValues: ITouchpoint = {
  type: '',
  channel: '',
  senderName: '',
  senderDescription: '',
  senderRiskCategory: '',
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
