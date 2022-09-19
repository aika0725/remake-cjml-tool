import { createTheme } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import { ThemeContext } from 'styled-components'

import Canvas from './components/Canvas/Canvas'
import { OpenContext, OpenStatusContext } from './components/Context/OpenStatusContext'
import FormContent from './components/Form/FormContent'
import Header from './components/Header/Header'
import { Main } from './components/Styles/FormCard'
import { validationSchema } from './components/validation'
import { formInitialValues } from './interfaces/FormData'

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

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App'>
        <OpenStatusContext.Provider value={status}>
          <Header />
          <Main open={open}>
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
                <FormContent />
                <Canvas />
              </>
            </Formik>
          </Main>
        </OpenStatusContext.Provider>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
