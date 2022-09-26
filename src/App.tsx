import { createTheme, ThemeProvider } from '@mui/material'
import { Formik } from 'formik'
import React, { useLayoutEffect, useRef, useState } from 'react'

import * as S from '../src/components/Styles/FormCard'
import Canvas from './components/Canvas/Canvas'
import Form from './components/Form'
import ToggleFormButton from './components/generic-components/ToggleFormButton'
import ToggleFormButtonMobile from './components/generic-components/ToggleFormButtonMobile'
import Header from './components/Header/Header'
import { Main } from './components/Styles/FormCard'
import { validationSchema } from './components/validation'
import { OpenStatusContextProvider } from './hooks/useFormOpenStatus'
import { InitialScenario } from './interfaces/FormData'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  const exportRef = useRef<HTMLDivElement>(null)

  const [canvasRef, setCanvasRef] = useState<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    setCanvasRef(exportRef.current)
  })

  return (
    <ThemeProvider theme={theme}>
      <OpenStatusContextProvider>
        <div className='App'>
          <Formik
            initialValues={InitialScenario}
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
              <Main>
                <ToggleFormButtonMobile />
                <Form />
                <S.Canvas>
                  <ToggleFormButton />
                  <div ref={exportRef}>
                    <Canvas />
                  </div>
                </S.Canvas>
              </Main>
            </>
          </Formik>
        </div>
      </OpenStatusContextProvider>
    </ThemeProvider>
  )
}

export default App
