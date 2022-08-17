import AddIcon from '@mui/icons-material/Add'
import { Divider, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { FieldArray, Formik, FormikProps } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

import { formInitialValues, IFormData } from '../../interfaces/FormData'
import { ITouchpoint, TouchpointType } from '../../interfaces/Touchpoint'
import ActionCard from '../ActionCard'
import ActorCard from '../ActorCard/ActorCard'
import CommunicationCard from '../CommunicationCard'
import DeleteButton from '../DeleteButton/DeleteButton'
import * as S from '../Styles/FormCard'
import TouchpointTypeButtons from '../TouchpointTypeButtons/TouchpointTypeButtons'

const validationSchema = yup.object({
  actors: yup.array().of(
    yup.object({
      actorName: yup.string().required('Actor name is required'),
      actorRole: yup.string().required('Actor role is required'),
    }),
  ),
  touchpoints: yup.array().of(
    yup.object({
      senderName: yup.string().required('Sender/Initiator name is required'),
      senderDescription: yup.string().required('Activity description is required'),
    }),
  ),
})

function Form() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const [type, setType] = useState('')
  const [hasChosen, setHasChosen] = useState(false)
  const descriptionElementRef = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Button onClick={handleClickOpen()}>open</Button>

      <S.FormContainer>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
          }}
          validationSchema={validationSchema}
        >
          {(formikProps: FormikProps<IFormData>) => {
            console.log(formikProps.values)
            return (
              <form onSubmit={formikProps.handleSubmit} style={{ width: '100%' }}>
                <S.Section>
                  <S.SectionTitle>
                    <Typography variant='h5'>Actors</Typography>
                  </S.SectionTitle>

                  {/* ---------------------------------- */}
                  <FieldArray
                    name='actors'
                    render={(arrayHelpers) => {
                      return (
                        <>
                          {formikProps.values.actors.map((actor, index) => (
                            <S.FormCard key={index}>
                              <S.CardHeader>
                                <Typography variant='h6'>Actor #{index + 1}</Typography>
                                <DeleteButton arrayHelpers={arrayHelpers} index={index} />
                              </S.CardHeader>
                              <ActorCard
                                name={`actors[${index}].actorName`}
                                role={`actors[${index}].actorRole`}
                                index={index}
                              />
                            </S.FormCard>
                          ))}
                          <Button
                            variant='outlined'
                            startIcon={<AddIcon />}
                            onClick={() =>
                              arrayHelpers.push({ id: 0, actorName: '', actorRole: '' })
                            }
                          >
                            New actor
                          </Button>
                        </>
                      )
                    }}
                  />
                </S.Section>
                <S.Section>
                  <S.SectionTitle>
                    <Typography variant='h5'>Touchpoints</Typography>
                  </S.SectionTitle>
                  <FieldArray
                    name='touchpoints'
                    render={(arrayHelpers) => {
                      console.log('1')
                      console.log(formikProps.values.touchpoints)
                      return (
                        <div>
                          {formikProps.values.touchpoints.map((touchpoint: ITouchpoint, index) => (
                            <div key={index}>
                              {touchpoint.type === TouchpointType.Action ? (
                                <ActionCard index={index} arrayHelpers={arrayHelpers} />
                              ) : (
                                <CommunicationCard />
                              )}
                            </div>
                          ))}
                          <TouchpointTypeButtons arrayHelpers={arrayHelpers} />
                        </div>
                      )
                    }}
                  />
                </S.Section>
                <Button color='primary' variant='contained' fullWidth type='submit'>
                  Submit
                </Button>
              </form>
            )
          }}
        </Formik>
      </S.FormContainer>
      {/* </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  )
}

export default Form
