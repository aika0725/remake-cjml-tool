import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import { fontStyles } from './styles'

const Risk = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Box mb={6}>
        <Box className={fontStyle.title}>{Content.risk.title}</Box>

        <Box className={fontStyle.subTitle}>{Content.risk.asset.title}</Box>

        {Content.risk.asset.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}
      </Box>

      <Box mb={6}>
        <Box className={fontStyle.subTitle}>{Content.risk.threat.title}</Box>

        {Content.basics.touchpoint.action.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}
      </Box>
      <Box mb={6}>
        <Box className={fontStyle.subTitle}>{Content.risk.incident.title}</Box>

        {Content.risk.incident.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}
      </Box>
    </Box>
  )
}

export default Risk
