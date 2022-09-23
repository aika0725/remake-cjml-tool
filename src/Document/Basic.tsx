import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import ImageSwimlane from '../../src/image-doc/swimlane.png'
import ImageAction from '../../src/image-doc/action.png'
import ImageCommunication from '../../src/image-doc/communication.png'
import { Image } from './Image-styles'

const Basic = () => {
  return (
    <Box>
      <Typography variant='h2' component='h2' mb={5}>
        {Content.basics.title}
      </Typography>
      <Image src={ImageSwimlane} />
      {/* ------------ */}

      <Typography variant='h3' component='h2' mb={2}>
        {Content.basics.actor.title}
      </Typography>

      {Content.basics.actor.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      {/* ---------- */}
      <Typography variant='h3' component='h2' mb={2}>
        {Content.basics.touchpoint.title}
      </Typography>
      <Typography variant='h4' component='h2' mb={2}>
        {Content.basics.touchpoint.action.title}
      </Typography>
      <Image src={ImageAction} />
      {Content.basics.touchpoint.action.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
      <Typography variant='h4' component='h2' mb={2}>
        {Content.basics.touchpoint.communication.title}
      </Typography>
      <Image src={ImageCommunication} />
      {Content.basics.touchpoint.communication.paragraph.map((par, index) => {
        return (
          <Typography paragraph key={index}>
            {par}
          </Typography>
        )
      })}
    </Box>
  )
}

export default Basic
