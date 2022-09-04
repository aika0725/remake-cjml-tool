export interface IActor {
  id: string
  actorName: string
  actorRole: ActorRoles | ''
}

export enum ActorRoles {
  Customer = 'customer',
  ServiceProvider = 'service-provider',
  Attacker = 'attacker',
  System = 'system',
  Bank = 'bank',
  StaffIT = 'staff-it',
  Store = 'store',
}

export enum ActorIcons {}
