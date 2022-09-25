import { createTheme } from '@mui/material'
import { Formik } from 'formik'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { ThemeContext } from 'styled-components'

import Canvas from './components/Canvas/Canvas'
import { OpenContext, OpenStatusContext } from './components/Context/OpenStatusContext'
import FormContent from './components/Form/FormContent'
import Header from './components/Header/Header'
import { Main } from './components/Styles/FormCard'
import { validationSchema } from './components/validation'
import { formInitialValues } from './interfaces/FormData'
import * as S from '../src/components/Styles/FormCard'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

function App() {
  const [open, setOpen] = React.useState<OpenContext['open']>(true)
  const status = { open, setOpen }

  const theme = createTheme()
  const exportRef = useRef<HTMLDivElement>(null)

  const [canvasRef, setCanvasRef] = useState<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    setCanvasRef(exportRef.current)
  })

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App'>
        <OpenStatusContext.Provider value={status}>
          <Formik
            initialValues={formInitialValues}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2))
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            validateOnMount={false}
          >
            <>
              <Header exportRef={canvasRef} />
              <Main open={open}>
                <FormContent />
                <S.Canvas ref={exportRef}>
                  <Canvas />
                </S.Canvas>
              </Main>
            </>
          </Formik>
        </OpenStatusContext.Provider>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
