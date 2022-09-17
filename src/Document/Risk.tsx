import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'

const Risk = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5}>
        {Content.risk.title}
      </Typography>
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.risk.asset.title}
      </Typography>
      {Content.risk.asset.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      {/* ---------- */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.risk.threat.title}
      </Typography>
      {Content.basics.touchpoint.action.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.risk.incident.title}
      </Typography>
      {Content.risk.incident.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
    </Box>
  )
}

export default Risk
