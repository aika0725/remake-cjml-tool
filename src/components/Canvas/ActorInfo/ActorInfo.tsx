import React from 'react'
import { IActor } from '../../../interfaces/Actor'

import * as D from '../diagram.style'

type Props = {
  actor: IActor
}

const ActorInfo = (props: Props) => {
  return (
    <>
      <D.SwimlaneActorInfo>
        <div>{props.actor.actorRole}</div>
        {props.actor.actorName}
      </D.SwimlaneActorInfo>
    </>
  )
}

export default ActorInfo
