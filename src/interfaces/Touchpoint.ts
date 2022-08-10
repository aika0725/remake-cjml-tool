export interface ITouchpoint {
  id: number
  type: string
  channel?: string
  senderName: string
  senderDescription: string
  senderRiskCategory?: string
  receiverName?: string
  receiverDescription?: string
  receiverRiskCategory?: string
  time?: string
}
