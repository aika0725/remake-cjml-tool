import { Typography } from '@mui/material'
import { FieldArray, useFormikContext } from 'formik'
import React, { RefObject, useRef } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { IFormData } from '../../../interfaces/FormData'
import { IAction, ICommunication, TouchpointType } from '../../../interfaces/Touchpoint'
import ActionCard from '../../ActionCard'
import CommunicationCard from '../../CommunicationCard'
import Loading from '../../generic-components/Loading'
import { Section, SectionTitle } from '../../Styles/FormCard'
import TouchpointTypeButtons from '../../TouchpointTypeButtons/TouchpointTypeButtons'

type Props = {
  isUpdating: boolean
}

const TouchpointsSection = () => {
  const { values } = useFormikContext<IFormData>()

  const parentDivRef: any = useRef()

  return (
    <Section ref={parentDivRef}>
      <SectionTitle>
        <Typography variant='h5'>Touchpoints</Typography>
      </SectionTitle>
      <FieldArray
        name='touchpoints'
        render={(arrayHelpers) => (
          <Droppable droppableId='droppable'>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ position: 'relative' }}
              >
                {values.touchpoints.map((touchpoint: IAction | ICommunication, index) => (
                  <div key={index}>
                    {touchpoint.type === TouchpointType.Action ? (
                      <Draggable draggableId={index.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ActionCard index={index} arrayHelpers={arrayHelpers} />
                          </div>
                        )}
                      </Draggable>
                    ) : (
                      <Draggable draggableId={index.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <CommunicationCard index={index} arrayHelpers={arrayHelpers} />
                          </div>
                        )}
                      </Draggable>
                    )}
                  </div>
                ))}
                {provided.placeholder}
                <TouchpointTypeButtons arrayHelpers={arrayHelpers} />
              </div>
            )}
          </Droppable>
        )}
      />
    </Section>
  )
}

export default TouchpointsSection