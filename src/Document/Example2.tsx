import React from 'react'
import Typography from '@mui/material/Typography'
import { Examples } from './Content'
import Box from '@mui/material/Box'
import { Image } from './Image-styles'
import ImageCinema from '../../src/image-doc/example2.png'
import { fontStyles } from './styles'

const ExampleCinema = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5} className={fontStyle.title}>
        {Examples.cinema.name}
      </Typography>
      {/* ------------ */}
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2} className={fontStyle.subTitle}>
        Content:
      </Typography>
      <Typography paragraph>Background: {Examples.cinema.background}</Typography>
      <Typography paragraph>{Examples.cinema.content}</Typography>

      <Image src={ImageCinema} />
    </Box>
  )
}

export default ExampleCinema
