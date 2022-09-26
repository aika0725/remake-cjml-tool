import React, { useEffect } from 'react'

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

import { Link } from 'react-router-dom'
import { exportAsImage } from '../../helpers/exportAsImage'
import { exportAsXML } from '../exportAsXML'
import { useFormikContext } from 'formik'
import { formInitialValues, IFormData } from '../../interfaces/FormData'

type Props = {
  exportRef: HTMLDivElement | null
}

const Header = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const { values, setValues } = useFormikContext<IFormData>()

  useEffect(() => {
    console.log('header' + props.exportRef)
  }, [props.exportRef])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleExportPng = () => {
    exportAsImage(props.exportRef, 'cjml')
  }

  const handleExportXML = () => {
    console.log('xml')

    exportAsXML(values)
  }

  return (
    <AppBar
      position='static'
      style={{ background: '#1e62a2', boxShadow: 'none' }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container style={{ maxWidth: 'none', paddingLeft: 30 }}>
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
              <MenuItem key='start' onClick={() => setValues(formInitialValues)}>
                New
              </MenuItem>
              <MenuItem onClick={handleExportPng}>
                <Typography textAlign='center' style={{ textTransform: 'none' }}>
                  Export as image
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleExportXML}>
                <Typography textAlign='center' style={{ textTransform: 'none' }}>
                  Export as XML
                </Typography>
              </MenuItem>
              <MenuItem key='doc'>
                <Typography textAlign='center' style={{ textTransform: 'none' }}>
                  <Link to={'/document'} target='_blank'>
                    User guide
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => setValues(formInitialValues)}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
            >
              New
            </Button>
            <Button
              onClick={handleExportPng}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
            >
              Export as image
            </Button>
            <Button
              onClick={handleExportXML}
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
            >
              Export as XML
            </Button>

            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              style={{ textTransform: 'none' }}
              component={Link}
              to='/document'
              target='_blank'
            >
              User guide
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
