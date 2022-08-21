import { Box } from '@mui/material'
import React from 'react'
import { OpenStatusContext, OpenContext } from './components/Context/OpenStatusContext'
import Form from './components/Form/Form'

import Header from './components/Header/Header'

function App() {
  const [open, setOpen] = React.useState<OpenContext['open']>(true)
  const status = { open, setOpen }

  return (
    <div className='App'>
      <OpenStatusContext.Provider value={status}>
        <Box sx={{ display: 'flex' }}>
          <Header />
          <Form />
        </Box>
      </OpenStatusContext.Provider>
    </div>
  )
}

export default App
