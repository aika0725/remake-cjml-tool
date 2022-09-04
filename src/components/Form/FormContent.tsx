import React, { useEffect, useMemo } from 'react'

import AddIcon from '@mui/icons-material/Add'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Divider, Typography, IconButton, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { FieldArray, useFormikContext } from 'formik'

import * as S from '../Styles/FormCard'
import { IFormData } from '../../interfaces/FormData'
import { IAction, ICommunication, TouchpointType } from '../../interfaces/Touchpoint'
import ActionCard from '../ActionCard'
import ActorCard from '../ActorCard/ActorCard'
import CommunicationCard from '../CommunicationCard'
import DeleteButton from '../DeleteButton/DeleteButton'
import TouchpointTypeButtons from '../TouchpointTypeButtons/TouchpointTypeButtons'
import { OpenStatusContext } from '../Context/OpenStatusContext'
import { useElementSize } from 'usehooks-ts'

import debounce from 'lodash/debounce'

const FormContent = () => {
  const theme = useTheme()
  const { values, handleSubmit, validateForm } = useFormikContext<IFormData>()

  const debouncedValidate = useMemo(() => debounce(validateForm, 500), [validateForm])

  useEffect(() => {
    console.log('calling deboucedValidate')
    debouncedValidate(values)
  }, [values, debouncedValidate])

  const { open, setOpen } = React.useContext(OpenStatusContext)
  const [formRef, { width }] = useElementSize()

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSubmit()
  }

  const uid = Math.floor(100000 + Math.random() * 900000).toString()
  console.log(values)
  return (
    <S.FormContainer open={open} width={width} ref={formRef}>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e)
        }}
        style={{ width: '100%' }}
      >
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
          <FieldArray
            name='actors'
            render={(arrayHelpers) => (
              <>
                {values.actors.map((_, index) => (
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
                  onClick={() => arrayHelpers.push({ id: uid, actorName: '', actorRole: '' })}
                >
                  New actor
                </Button>
              </>
            )}
          />
        </S.Section>
        <S.Section>
          <S.SectionTitle>
            <Typography variant='h5'>Touchpoints</Typography>
          </S.SectionTitle>
          <FieldArray
            name='touchpoints'
            render={(arrayHelpers) => (
              <>
                {values.touchpoints.map((touchpoint: IAction | ICommunication, index) => (
                  <div key={index}>
                    {touchpoint.type === TouchpointType.Action ? (
                      <ActionCard index={index} arrayHelpers={arrayHelpers} />
                    ) : (
                      <CommunicationCard index={index} arrayHelpers={arrayHelpers} />
                    )}
                  </div>
                ))}
                <TouchpointTypeButtons arrayHelpers={arrayHelpers} />
              </>
            )}
          />
        </S.Section>
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </S.FormContainer>
  )
}

export default FormContent
