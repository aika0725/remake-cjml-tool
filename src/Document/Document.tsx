import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

export default function Document() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}