import { IActor } from './Actor'
import { ITouchpoint } from './Touchpoint'

export interface IFormData {
  actors: IActor[]
  touchpoints: ITouchpoint[]
}

export const formInitialValues: IFormData = {
  actors: [{ id: 0, actorName: '', actorRole: '' }],
  touchpoints: [],
}
