import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import { fontStyles } from './styles'

const Overview = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5} className={fontStyle.title}>
        CJML Diagram Generator User Guide
      </Typography>
      {Content.overview.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
    </Box>
  )
}

export default Overview
