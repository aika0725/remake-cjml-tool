import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'

const Basic = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5}>
        {Content.basics.title}
      </Typography>
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.basics.actor.title}
      </Typography>
      {Content.basics.actor.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      {/* ---------- */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.basics.touchpoint.title}
      </Typography>
      <Typography variant='h4' component='h2' mb={2}>
        {Content.basics.touchpoint.action.title}
      </Typography>
      {Content.basics.touchpoint.action.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      <Typography variant='h4' component='h2' mb={2}>
        {Content.basics.touchpoint.communication.title}
      </Typography>
      {Content.basics.touchpoint.communication.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
    </Box>
  )
}

export default Basic
