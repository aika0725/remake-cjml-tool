import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'

import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const drawerWidth = 240
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Overview', 'CJML Basics', 'Usage of the tool', 'Risk management'].map((text) => (
            <ListItem
              key={text}
              disablePadding
              component={Link}
              to={`/document/${text.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Example 1', 'Example 2', 'Example 3'].map((text) => (
            <ListItem
              key={text}
              disablePadding
              component={Link}
              to={`/document/${text.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideBar
