import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'

const Usage = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5}>
        {Content.usage.title}
      </Typography>
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.usage.overview.title}
      </Typography>
      {Content.usage.overview.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      {/* ---------- */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.usage.form.title}
      </Typography>
      {/* {Content.basics.touchpoint.action.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })} */}
    </Box>
  )
}

export default Usage
