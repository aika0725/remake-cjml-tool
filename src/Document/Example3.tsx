import React from 'react'
import Typography from '@mui/material/Typography'
import { Examples } from './Content'
import Box from '@mui/material/Box'
import { Image } from './Image-styles'
import ImagePhishing from '../../src/image-doc/Threat-scenario.png'
import { fontStyles } from './styles'

const ExamplePhishing = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Typography variant='h2' mb={5}>
        <Box className={fontStyle.title}> {Examples.phishing.name}</Box>
      </Typography>

      <Typography variant='h3' mb={2}>
        <Box className={fontStyle.subTitle}>Content: </Box>
        <Typography>(Asset: Bob`s money)</Typography>
      </Typography>
      <Typography paragraph>Background: {Examples.phishing.background}</Typography>
      <Typography paragraph>{Examples.phishing.content}</Typography>

      <Image src={ImagePhishing} />
    </Box>
  )
}

export default ExamplePhishing
