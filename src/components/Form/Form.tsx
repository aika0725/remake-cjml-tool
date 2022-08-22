import React, { useLayoutEffect, useRef, useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Divider, Typography, IconButton, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { FieldArray, Formik, FormikProps } from 'formik'
import * as yup from 'yup'

import * as S from '../Styles/FormCard'
import { formInitialValues, IFormData } from '../../interfaces/FormData'
import { ITouchpoint, TouchpointType } from '../../interfaces/Touchpoint'
import ActionCard from '../ActionCard'
import ActorCard from '../ActorCard/ActorCard'
import CommunicationCard from '../CommunicationCard'
import DeleteButton from '../DeleteButton/DeleteButton'
import TouchpointTypeButtons from '../TouchpointTypeButtons/TouchpointTypeButtons'
import { OpenStatusContext } from '../Context/OpenStatusContext'

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
      receiverName: yup.string().required('receiver name is required'),
      receiverDescription: yup.string().required('Activity description is required'),
    }),
  ),
})

type Width = number | undefined

function Form() {
  const theme = useTheme()
  const ref = useRef(null)
  const [width, setWidth] = useState<Width>(0)
  const { open, setOpen } = React.useContext(OpenStatusContext)

  useLayoutEffect(() => {
    setWidth(ref?.current?.['offsetWidth'])
    console.log(width)
  }, [width])

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <S.FormContainer open={open} ref={ref}>
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
              <S.FormHeader>
                <S.CJMLFormHeaderTypography>Create a CJML diagram</S.CJMLFormHeaderTypography>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </S.FormHeader>
              <Divider />
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
                          onClick={() => arrayHelpers.push({ id: 0, actorName: '', actorRole: '' })}
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
                    console.log(formikProps.values.touchpoints)
                    return (
                      <div>
                        {formikProps.values.touchpoints.map((touchpoint: ITouchpoint, index) => (
                          <div key={index}>
                            {touchpoint.type === TouchpointType.Action ? (
                              <ActionCard index={index} arrayHelpers={arrayHelpers} />
                            ) : (
                              <CommunicationCard index={index} arrayHelpers={arrayHelpers} />
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
  )
}

export default Form
