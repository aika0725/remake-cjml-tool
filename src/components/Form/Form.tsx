import React from 'react'

import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Divider, Typography, IconButton, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { FieldArray, Formik, FormikProps } from 'formik'

import * as S from '../Styles/FormCard'
import { formInitialValues, IFormData } from '../../interfaces/FormData'
import { ITouchpoint, TouchpointType } from '../../interfaces/Touchpoint'
import ActionCard from '../ActionCard'
import ActorCard from '../ActorCard/ActorCard'
import CommunicationCard from '../CommunicationCard'
import DeleteButton from '../DeleteButton/DeleteButton'
import TouchpointTypeButtons from '../TouchpointTypeButtons/TouchpointTypeButtons'
import { OpenStatusContext } from '../Context/OpenStatusContext'
import { useElementSize } from 'usehooks-ts'
import { FormContext } from '../Context/FormContext'
import { validationSchema } from '../validation'

function Form() {
  const theme = useTheme()

  const { open, setOpen } = React.useContext(OpenStatusContext)
  const [formRef, { width }] = useElementSize()
  console.log(width)

  const { formContextValue, setFormContextValue } = React.useContext(FormContext)
  console.log(formContextValue)

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <S.FormContainer open={open} width={width} ref={formRef}>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={validationSchema}
      >
        {(formikProps: FormikProps<IFormData>) => {
          console.log(formikProps.values)

          const handleSumbit = () => {
            setFormContextValue(formikProps.values)
          }

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
              <Button
                color='primary'
                variant='contained'
                fullWidth
                type='submit'
                onClick={handleSumbit}
              >
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
