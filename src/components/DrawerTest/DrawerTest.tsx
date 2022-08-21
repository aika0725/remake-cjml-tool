import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'

import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Header from '../Header/Header'
import * as S from '../Styles/FormCard'
import { OpenStatusContext } from '../Context/OpenStatusContext'

const drawerWidth = 722

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function DrawerTest() {
  const theme = useTheme()
  const { open, setOpen } = React.useContext(OpenStatusContext)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <Header /> */}
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          marginTop: '70px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '50%',
            marginTop: '70px',
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        // variant="permanent"
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          Create a CJML diagram
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <S.FormContainer>This in the form</S.FormContainer>
        in the drawer
      </Drawer>
      <Main open={open}>Canvas</Main>
    </Box>
  )
}
