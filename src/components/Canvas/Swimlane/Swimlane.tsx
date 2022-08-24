import { useFormikContext } from 'formik'
import React from 'react'
import { IFormData } from '../../../interfaces/FormData'
import { FormContext } from '../../Context/FormContext'
import ActorInfo from '../ActorInfo/ActorInfo'
import * as D from '../diagram.style'
import Touchpoint from '../Touchpoint/Touchpoint'

const Swimlane = () => {
  const { formContextValue, setFormContextValue } = React.useContext(FormContext)
  console.log(formContextValue.actors)
  return (
    <>
      {formContextValue.actors.map((actor, index) => {
        return (
          <D.SwimlaneRow key={index}>
            <ActorInfo actor={actor} />
            {formContextValue.touchpoints.map((touchpoint, index) => {
              return <Touchpoint key={index} actor={actor} touchpoint={touchpoint} />
            })}
          </D.SwimlaneRow>
        )
      })}
    </>
  )
}

export default Swimlane
