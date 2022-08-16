export interface IActor {
  id: number
  actorName: string
  actorRole: ActorRoles | ''
}

export enum ActorRoles {
  Customer = 'customer',
  ServiceProvider = 'service-provider',
  Attacker = 'attacker',
  System = 'system',
}
