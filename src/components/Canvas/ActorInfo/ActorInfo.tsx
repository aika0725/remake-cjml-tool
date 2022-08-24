import { useFormikContext } from 'formik'
import { type } from 'os'
import React from 'react'
import { IActor } from '../../../interfaces/Actor'
import { IFormData } from '../../../interfaces/FormData'
import { FormContext } from '../../Context/FormContext'
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
