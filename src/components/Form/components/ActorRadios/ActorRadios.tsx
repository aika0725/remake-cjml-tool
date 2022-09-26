import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { IFormData } from '../../../../interfaces/FormData'
import { useFormikContext } from 'formik'
import { IAction, ICommunication, TouchpointType } from '../../../../interfaces/Touchpoint'

type Props = {
  name: string
  index: number
  type?: TouchpointType
  entity?: 'receiver' | 'sender'
}

const ActorRadios = (props: Props) => {
  const { values, handleChange } = useFormikContext<IFormData>()

  // -- Checks if touchpoint is action or communication and assigns the correct actor ID --
  // This function is required to access the correct properties from array
  // that contains multiple types, when setting the value for the controlled
  // component after drag and drop
  const getSelectedActor = () => {
    let finalValue = ''

    if (props.type === TouchpointType.Action) {
      const value = values.touchpoints[props.index] as IAction
      const defaultValue = value ? value.initiatorID : ''
      finalValue = defaultValue
    }

    if (props.type === TouchpointType.Communication) {
      const value = values.touchpoints[props.index] as ICommunication
      if (value) {
        if (props.entity === 'receiver') {
          const defaultValue = value ? value.receiverID : ''
          finalValue = defaultValue
        }
        if (props.entity === 'sender') {
          const defaultValue = value ? value.senderID : ''
          finalValue = defaultValue
        }
      }
    }

    return finalValue
  }

  return (
    <RadioGroup row name={props.name} onChange={handleChange} value={getSelectedActor()}>
      <>
        {values.actors.map((actor, index) => {
          return (
            <FormControlLabel
              key={index}
              value={actor.id}
              control={<Radio />}
              label={`${actor.actorName}`}
              name={props.name}
            />
          )
        })}
      </>
    </RadioGroup>
  )
}

export default ActorRadios
