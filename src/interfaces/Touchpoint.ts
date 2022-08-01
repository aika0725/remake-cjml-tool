export interface ITouchpoint {
  id: number
  type: string
  channel?: string
  senderName: string
  senderID: string
  senderDescription: string
  senderCategory?: string
  receiverName?: string
  receiverID?: string
  receiverDescription?: string
  receiverCategory?: string
  time?: string
}
