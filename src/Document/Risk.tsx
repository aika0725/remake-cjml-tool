import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import { fontStyles } from './styles'
import { Divider } from '@mui/material'

const Risk = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5} className={fontStyle.title}>
        {Content.risk.title}
      </Typography>
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2} className={fontStyle.subTitle}>
        {Content.risk.asset.title}
      </Typography>
      {Content.risk.asset.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      <Divider />
      {/* ---------- */}
      <Typography variant='h3' component='h2' mb={2} className={fontStyle.subTitle}>
        {Content.risk.threat.title}
      </Typography>
      {Content.basics.touchpoint.action.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      <Divider />
      <Typography variant='h3' component='h2' mb={2} className={fontStyle.subTitle}>
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
