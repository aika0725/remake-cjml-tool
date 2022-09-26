import { Divider } from '@mui/material'
import { useFormikContext } from 'formik'
import debounce from 'lodash/debounce'
import React, { useEffect, useMemo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useElementSize } from 'usehooks-ts'

import { reorder } from '../../helpers/reorder'
import { useFormOpenStatus } from '../../hooks/useFormOpenStatus'
import { IFormData } from '../../interfaces/FormData'
import * as S from '../Styles/FormCard'
import ActorsSection from './Sections/ActorsSection'
import TouchpointsSection from './Sections/TouchpointsSection'

const Form = () => {
  const { open } = useFormOpenStatus()

  const { values, validateForm, setFieldValue } = useFormikContext<IFormData>()

  const debouncedValidate = useMemo(() => debounce(validateForm, 100), [validateForm])

  useEffect(() => {
    console.log('calling deboucedValidate')
    debouncedValidate(values)
  }, [values, debouncedValidate])

  const [formRef] = useElementSize()

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newTouchpointOrder = reorder(values.touchpoints, source.index, destination.index)

    setFieldValue('touchpoints', newTouchpointOrder)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <S.FormContainer open={open} ref={formRef}>
        <form
          onSubmit={(e) => {
            handleFormSubmit(e)
          }}
          style={{ width: '100%', height: 'fit-content' }}
        >
          <S.FormHeader>
            <S.CJMLFormHeaderTypography>Create a CJML diagram</S.CJMLFormHeaderTypography>
          </S.FormHeader>
          <Divider />
          <ActorsSection />
          <TouchpointsSection />
        </form>
      </S.FormContainer>
    </DragDropContext>
  )
}

export default Form
