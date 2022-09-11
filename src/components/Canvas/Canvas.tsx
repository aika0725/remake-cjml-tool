import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import { IFormData } from '../../interfaces/FormData'
import Loading from '../generic-components/Loading'
import * as S from '../Styles/FormCard'
import Swimlane from './Swimlane/Swimlane'

const Canvas = () => {
  return (
    <>
      <S.Canvas>
        <Swimlane />
      </S.Canvas>
    </>
  )
}

export default Canvas
