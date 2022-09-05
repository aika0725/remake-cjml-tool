import { Typography } from '@mui/material'
import { IActor } from '../../../interfaces/Actor'

import * as D from '../diagram.style'
import { ActorIcon } from './styles'

type Props = {
  actor: IActor
}

const ActorInfo = ({ actor }: Props) => {
  return (
    <D.SwimlaneActorInfo>
      <ActorIcon>
        {actor.actorRole && <img src={`icons/actors/${actor.actorRole}.png`} />}
      </ActorIcon>
      <div>
        <Typography variant='body2'>{actor.actorName}</Typography>
      </div>
    </D.SwimlaneActorInfo>
  )
}

export default ActorInfo
