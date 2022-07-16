import { Box, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import SelectRole from '../SelectRole/SelectRole'
import TextInputActor from '../TextInputActor/TextInputActor'

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#3160ed',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#d5d5d5',
    },
  },
})

const ActorCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'secondary.main',
        }}
      >
        <p>Actor x</p>
        <Box sx={{ display: 'inline-flex' }}>
          <TextInputActor />
          <SelectRole />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default ActorCard
