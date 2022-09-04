export interface ITouchpoint {
  type: TouchpointType | ''
}

export interface IAction extends ITouchpoint {
  initiatorID: string
  touchpointDescription: {
    actionDescription: string
    RiskCategory?: string
    time?: Date | null
  }
}

export interface ICommunication extends ITouchpoint {
  senderID: string
  receiverID: string
  touchpointDescription: {
    channel: TouchpointChannels | ''
    senderDescription: string
    senderRiskCategory?: string
    receiverDescription: string
    receiverRiskCategory?: string
    time?: Date | null
  }
}

// export const touchpointInitialValues: IAction | ICommunication = {
//   type: '',
//   initiatorID: '',
//   touchpointDescription: {
//     actionDescription:'',
//     RiskCategory?: '',
//     time?: null,
//   }
// }

export const actionInitialvalues: IAction = {
  type: '',
  initiatorID: '',
  touchpointDescription: {
    actionDescription: '',
    RiskCategory: '',
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
    senderRiskCategory: '',
    receiverDescription: '',
    receiverRiskCategory: '',
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
