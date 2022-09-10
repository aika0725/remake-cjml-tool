import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, Divider, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useFormikContext } from 'formik'
import debounce from 'lodash/debounce'
import React, { useEffect, useMemo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useDebounce, useElementSize } from 'usehooks-ts'

import { reorder } from '../../helpers/reorder'
import { IFormData } from '../../interfaces/FormData'
import { OpenStatusContext } from '../Context/OpenStatusContext'
import * as S from '../Styles/FormCard'
import ActorsSection from './Sections/ActorsSection'
import TouchpointsSection from './Sections/TouchpointsSection'

const FormContent = () => {
  const theme = useTheme()
  const { values, handleSubmit, validateForm, errors, setFieldValue } =
    useFormikContext<IFormData>()

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
    console.log(event)
    // handleSubmit()
  }

  const handleDragEnd = ({ destination, source, draggableId }: DropResult) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newTouchpointOrder = reorder(values.touchpoints, source.index, destination!.index)

    setFieldValue('touchpoints', newTouchpointOrder)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
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
          <ActorsSection />
          <TouchpointsSection />
          <Button color='primary' variant='contained' fullWidth onClick={() => handleSubmit()}>
            Submit
          </Button>
        </form>
      </S.FormContainer>
    </DragDropContext>
  )
}

export default FormContent
