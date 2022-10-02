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
import { makeStyles } from '@material-ui/core/styles'

const buttonStyles = makeStyles({
  reset: {
    background: 'linear-gradient(60deg, #1976d2 30%, #1976d2 90%)',
    // background: '#527dda 30%',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #7c73db4c',
    color: 'white',
    height: 38,
    padding: '0 16px',
    marginLeft: '70px',
    marginRight: '20px',
  },
})

type Props = {
  exportRef: HTMLDivElement | null
}

const Header = (props: Props) => {
  const buttonStyle = buttonStyles()

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
                New/Reset form
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
              // style={{ textTransform: 'none' }}
              className={buttonStyle.reset}
            >
              New/Reset form
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
