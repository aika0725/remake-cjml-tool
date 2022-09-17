import React from 'react'
import { AppBar, Typography, Button, Toolbar } from '@mui/material'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          CJML document
        </Typography>

        <Button
          color='inherit'
          // sx={{ my: 2, color: 'white', display: 'block', textAlign: 'center' }}
          style={{ textTransform: 'none' }}
          component={Link}
          to='/'
        >
          Back to the tool
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
