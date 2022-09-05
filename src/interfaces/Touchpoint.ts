export interface ITouchpoint {
  type: TouchpointType | ''
}

export interface IAction extends ITouchpoint {
  initiatorID: string
  touchpointDescription: {
    actionDescription: string
    riskCategory: RiskCategory
    time?: Date | null
  }
}

export enum RiskCategory {
  Threat = 'threat',
  Incident = 'incident',
  None = 'none',
}

export interface ICommunication extends ITouchpoint {
  senderID: string
  receiverID: string
  touchpointDescription: {
    channel: TouchpointChannels | ''
    senderDescription: string
    senderRiskCategory: RiskCategory
    receiverDescription: string
    receiverRiskCategory: RiskCategory
    time?: Date | null
  }
}

export const actionInitialvalues: IAction = {
  type: '',
  initiatorID: '',
  touchpointDescription: {
    actionDescription: '',
    riskCategory: RiskCategory.None,
    time: null,
  },
}

export const communicationInitialvalues: ICommunication = {
  type: '',
  senderID: '',
  receiverID: '',
  touchpointDescription: {
    channel: '',
    senderDescription: '',
    senderRiskCategory: RiskCategory.None,
    receiverDescription: '',
    receiverRiskCategory: RiskCategory.None,
    time: null,
  },
}

export enum TouchpointType {
  Action = 'action',
  Communication = 'communication',
}

export enum TouchpointChannels {
  SMS = 'sms',
  Email = 'email',
  Phone = 'phone',
  FaceToFace = 'face-to-face',
  Website = 'website',
  Letter = 'letter',
  Payment = 'payment',
  SelfServiceMachine = 'self-service-machine',
}

export enum CommunicationRole {
  Sender = 'sender',
  Receiver = 'receiver',
}
