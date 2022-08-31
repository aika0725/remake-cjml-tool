import { IActor } from './Actor'
import { IAction, ICommunication } from './Touchpoint'

export interface IFormData {
  actors: IActor[]
  // touchpoints: (IAction | ICommunication)[]
  touchpoints: Array<IAction | ICommunication>
}

export const formInitialValues: IFormData = {
  actors: [{ id: '0', actorName: '', actorRole: '' }],
  touchpoints: [],
}
