import React from 'react'
import { OpenStatusContext, OpenContext } from './components/Context/OpenStatusContext'
import Canvas from './components/Canvas/Canvas'
import Form from './components/Form/Form'

import Header from './components/Header/Header'
import { Main } from './components/Styles/FormCard'

function App() {
  const [open, setOpen] = React.useState<OpenContext['open']>(true)

  const status = { open, setOpen }

  return (
    <div className='App'>
      <OpenStatusContext.Provider value={status}>
        <Header />
        <Main>
          <Form />
          <Canvas />
        </Main>
      </OpenStatusContext.Provider>
    </div>
  )
}

export default App
