import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import ImageOverview from '../../src/image-doc/tool-overview.png'
import ImageForm from '../../src/image-doc/form.png'
import ImageDragDrop from '../../src/image-doc/drag-drop.png'
import { Image } from './Image-styles'

const Usage = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5}>
        {Content.usage.title}
      </Typography>
      {/* ------------ */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.usage.overview.title}
      </Typography>
      {Content.usage.overview.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}

      <Image src={ImageOverview} />

      {/* ---------- */}

      <Typography variant='h3' component='h2' mb={2}>
        {Content.usage.form.title}
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
