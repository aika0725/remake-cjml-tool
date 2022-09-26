import { ActorRoles, IActor } from './Actor'
import { IAction, ICommunication, TouchpointType } from './Touchpoint'

export interface IFormData {
  actors: IActor[]
  touchpoints: Array<IAction | ICommunication>
}

export const formInitialValues: IFormData = {
  actors: [{ id: '0', actorName: '', actorRole: '' }],
  touchpoints: [],
}

export const InitialScenario = {
  actors: [
    {
      id: '249155',
      actorName: 'Bob',
      actorRole: ActorRoles.Customer,
    },
    {
      id: '765332',
      actorName: 'Phishing website',
      actorRole: ActorRoles.Customer,
    },
    {
      id: '233990',
      actorName: 'Restaurant',
      actorRole: ActorRoles.Store,
    },
    {
      id: '933792',
      actorName: 'Attacker',
      actorRole: ActorRoles.Attacker,
    },
  ],
  touchpoints: [
    {
      type: TouchpointType.Action,
      initiatorID: '933792',
      touchpointDescription: {
        actionDescription: 'Sets up phishing website',
        riskCategory: 'threat',
        time: null,
      },
    },
    {
      type: TouchpointType.Communication,
      senderID: '933792',
      receiverID: '249155',
      touchpointDescription: {
        channel: 'email',
        senderDescription: 'Sent phishing email to pizza customers',
        senderRiskCategory: 'none',
        receiverDescription: 'Receiver the email',
        receiverRiskCategory: 'threat',
        time: null,
      },
    },
    {
      type: TouchpointType.Action,
      initiatorID: '249155',
      touchpointDescription: {
        actionDescription: 'Opened email and clicked the phishing link',
        riskCategory: 'threat',
        time: null,
      },
    },
    {
      type: TouchpointType.Communication,
      senderID: '249155',
      receiverID: '765332',
      touchpointDescription: {
        channel: 'website',
        senderDescription: 'Logged in the phishing website, placed and paid for his order',
        senderRiskCategory: 'incident',
        receiverDescription: 'Received the order and payment',
        receiverRiskCategory: 'incident',
        time: null,
      },
    },
    {
      type: TouchpointType.Action,
      initiatorID: '249155',
      touchpointDescription: {
        actionDescription: 'Waited for his pizza',
        riskCategory: 'none',
        time: null,
      },
    },
    {
      type: TouchpointType.Communication,
      senderID: '249155',
      receiverID: '233990',
      touchpointDescription: {
        channel: 'phone',
        senderDescription: 'Asked about his order status',
        senderRiskCategory: 'none',
        receiverDescription: 'Told Bob there are no promotions and he was scammed',
        receiverRiskCategory: 'none',
        time: null,
      },
    },
  ],
}
