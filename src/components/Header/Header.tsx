import React, { useContext, forwardRef, useLayoutEffect, useEffect } from 'react'
import {
  AppBar,
  Typography,
  IconButton,
  Button,
  Box,
  Toolbar,
  Menu,
  Container,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { OpenStatusContext } from '../Context/OpenStatusContext'
import { Link } from 'react-router-dom'
import { exportAsImage } from '../../helpers/exportAsImage'

const items = ['Export diagram as Image', 'Export diagram as XML']
type Props = {
  exportRef: HTMLDivElement | null
}

const Header = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const { setOpen } = useContext(OpenStatusContext)

  useEffect(() => {
    console.log('header' + props.exportRef)
  }, [props.exportRef])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleExportPng = () => {
    exportAsImage(props.exportRef, 'cjml')
  }

  useLayoutEffect(() => {
    console.log(props.exportRef)
  })

  return (
    <AppBar
      position='static'
      style={{ background: '#1e62a2' }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CJML
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key='start' onClick={handleDrawerOpen}>
                Start/Edit
              </MenuItem>

              {items.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' style={{ textTransform: 'none' }}>
                    {item}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key='doc' onClick={handleCloseNavMenu}>
                <Typography textAlign='center' style={{ textTransform: 'none' }}>
                  <Link to={'/document'}>User Guide</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='start'
              onClick={handleDrawerOpen}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
            >
              Start/Edit
            </Button>
            {items.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ textTransform: 'none' }}
              >
                {item}
              </Button>
            ))}
            <Button
              key='doc'
              onClick={handleExportPng}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
            >
              Export
            </Button>
            <Button
              key='doc'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
              component={Link}
              to='/document'
            >
              User Guide
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
