import React from 'react'
import Typography from '@mui/material/Typography'
import { Examples } from './Content'
import Box from '@mui/material/Box'
import { Image } from './Image-styles'
import ImagePhishing from '../../src/image-doc/Threat-scenario.png'

const ExamplePhishing = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5}>
        {Examples.phishing.name}
      </Typography>
      {/* ------------ */}
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2}>
        Content: <Typography>Asset: Bob`s money</Typography>
      </Typography>
      <Typography paragraph>Background: {Examples.phishing.background}</Typography>
      <Typography paragraph>{Examples.phishing.content}</Typography>

      <Image src={ImagePhishing} />
    </Box>
  )
}

export default ExamplePhishing
