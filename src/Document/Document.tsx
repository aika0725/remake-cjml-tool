import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export default function Document() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box
        component='main'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{ flexGrow: 1, p: 3, mt: 9 }}
      >
        {/* */}
        {/* <Toolbar /> */}
        {/* <Box sx={{ maxWidth: 840 }}> */}
        <Container maxWidth='md'>
          <Outlet />
        </Container>

        {/* </Box> */}
      </Box>
    </Box>
  )
}
