import React, { useEffect, useMemo } from 'react'
import { OpenStatusContext, OpenContext } from './components/Context/OpenStatusContext'
import Canvas from './components/Canvas/Canvas'

import Header from './components/Header/Header'
import { Main } from './components/Styles/FormCard'

import { formInitialValues, IFormData } from './interfaces/FormData'
import { Formik, useFormik, useFormikContext } from 'formik'
import { validationSchema } from './components/validation'
import FormContent from './components/Form/FormContent'

function App() {
  const [open, setOpen] = React.useState<OpenContext['open']>(true)
  const status = { open, setOpen }

  return (
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
          >
            <>
              <FormContent />
              <Canvas />
            </>
          </Formik>
        </Main>
      </OpenStatusContext.Provider>
    </div>
  )
}

export default App
