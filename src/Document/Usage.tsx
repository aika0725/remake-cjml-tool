import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import ImageOverview from '../../src/image-doc/tool-overview.png'
import ImageForm from '../../src/image-doc/form.png'
import ImageDragDrop from '../../src/image-doc/touchpoint_dragndrop.png'
import { Image } from './Image-styles'
import { fontStyles } from './styles'

const Usage = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Box mb={6}>
        <Box className={fontStyle.title}> {Content.usage.title}</Box>
        <Box className={fontStyle.subTitle}> {Content.usage.overview.title}</Box>
        {Content.usage.overview.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}
        <Image src={ImageOverview} />
      </Box>
      <Box className={fontStyle.subTitle}>{Content.usage.form.title}</Box>

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
