import React from 'react'
import { OpenStatusContext, OpenContext } from './components/Context/OpenStatusContext'
import Canvas from './components/Canvas/Canvas'
import Form from './components/Form/Form'

import Header from './components/Header/Header'
import { Main } from './components/Styles/FormCard'
import { FormContext, FormContextType } from './components/Context/FormContext'
import { formInitialValues } from './interfaces/FormData'

function App() {
  const [open, setOpen] = React.useState<OpenContext['open']>(true)
  const status = { open, setOpen }
  const [formContextValue, setFormContextValue] =
    React.useState<FormContextType['formContextValue']>(formInitialValues)

  const FormContextStatus = { formContextValue, setFormContextValue }

  return (
    <div className='App'>
      <OpenStatusContext.Provider value={status}>
        <Header />
        <Main open={open}>
          <FormContext.Provider value={FormContextStatus}>
            <Form />
            <Canvas />
          </FormContext.Provider>
        </Main>
      </OpenStatusContext.Provider>
    </div>
  )
}

export default App
