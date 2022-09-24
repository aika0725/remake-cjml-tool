import React from 'react'
import Typography from '@mui/material/Typography'
import { Examples } from './Content'
import Box from '@mui/material/Box'
import { Image } from './Image-styles'
import ImagePizza from '../../src/image-doc/example1.png'
import { fontStyles } from './styles'

const ExamplePizza = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Typography variant='h2' mb={5}>
        <Box className={fontStyle.title}>{Examples.pizza.name}</Box>
      </Typography>
      {/* ------------ */}
      <Typography variant='h3' mb={2}>
        <Box className={fontStyle.subTitle}> Content:</Box>
      </Typography>
      <Typography paragraph>Background: {Examples.pizza.background}</Typography>
      <Typography paragraph>{Examples.pizza.content}</Typography>

      <Image src={ImagePizza} />
    </Box>
  )
}

export default ExamplePizza
