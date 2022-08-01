import { Box, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import SelectRole from '../SelectRole/SelectRole'
import TextInputActor from '../TextInputActor/TextInputActor'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#d5d5d5',
    },
  },
})

type props = {
  key: number
  order: number
}

const ActorCard = (props: props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'secondary.main',
        }}
      >
        <p>Actor {props.order}</p>
        <Box sx={{ display: 'inline-flex' }}>
          <TextInputActor />
          <SelectRole />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default ActorCard
