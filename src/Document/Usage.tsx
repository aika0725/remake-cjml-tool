import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import ImageOverview from '../../src/image-doc/tool-overview.png'
import ImageForm from '../../src/image-doc/form.png'
import ImageDragDrop from '../../src/image-doc/drag-drop.png'
import { Image } from './Image-styles'
import { fontStyles } from './styles'
import { Divider } from '@mui/material'

const Usage = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Typography variant='h2' mb={5}>
        <Box className={fontStyle.title}> {Content.usage.title}</Box>
      </Typography>
      <Typography variant='h3' mb={2}>
        <Box className={fontStyle.subTitle}> {Content.usage.overview.title}</Box>
      </Typography>
      {Content.usage.overview.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}

      <Image src={ImageOverview} />

      <Divider />

      <Typography variant='h3' mb={2}>
        <Box className={fontStyle.subTitle}>{Content.usage.form.title}</Box>
      </Typography>
      <Typography paragraph>1. Follow the instruction and fill the form</Typography>
      <Image src={ImageForm} />
      <Typography paragraph>
        2. Change touchpoint order: Drag touchpoint cards and put in the position you want
      </Typography>
      <Image src={ImageDragDrop} />
    </Box>
  )
}

export default Usage
