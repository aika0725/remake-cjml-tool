import { useFormikContext } from 'formik'
import React from 'react'
import { IFormData } from '../../../interfaces/FormData'
import ActorInfo from '../ActorInfo/ActorInfo'
import * as D from '../diagram.style'
import TouchpointInfo from '../TouchpointInfo'

const Swimlane = () => {
  const { values } = useFormikContext<IFormData>()

  return (
    <>
      {values.actors.map((actor, index) => {
        return (
          <D.SwimlaneRow key={index}>
            <ActorInfo actor={actor} />
            {values.touchpoints.map((touchpoint, index) => (
              <TouchpointInfo key={index} actor={actor} touchpoint={touchpoint} />
            ))}
          </D.SwimlaneRow>
        )
      })}
    </>
  )
}

export default Swimlane
