import React from 'react'
import Typography from '@mui/material/Typography'
import { Content } from './Content'
import Box from '@mui/material/Box'
import ImageSwimlane from '../../src/image-doc/swimlane.png'
import ImageAction from '../../src/image-doc/action.png'
import ImageCommunication from '../../src/image-doc/communication.png'
import { Image } from './Image-styles'

import { fontStyles } from './styles'

const Basic = () => {
  const fontStyle = fontStyles()
  return (
    <Box>
      <Box mb={6}>
        <Box className={fontStyle.title}>{Content.overview.title}</Box>

        {Content.overview.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}
        {/* <Divider /> */}
      </Box>

      <Box mb={6}>
        <Box className={fontStyle.title}>{Content.basics.title}</Box>

        <Image src={ImageSwimlane} />
        {/* <Divider /> */}
      </Box>
      <Box mb={6}>
        <Typography variant='h3' mb={2}>
          <Box className={fontStyle.subTitle}>{Content.basics.actor.title}</Box>
        </Typography>

        {Content.basics.actor.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}
        {/* <Divider /> */}
      </Box>
      {/* ---------- */}
      <Box>
        <Typography variant='h3' mb={2}>
          <Box className={fontStyle.subTitle}> {Content.basics.touchpoint.title}</Box>
        </Typography>
        <Typography variant='h4' mb={2}>
          <Box className={fontStyle.thirdTitle}>{Content.basics.touchpoint.action.title}</Box>
        </Typography>
        <Image src={ImageAction} />
        {Content.basics.touchpoint.action.paragraph.map((par, index) => {
          return (
            <Typography paragraph key={index}>
              {par}
            </Typography>
          )
        })}

        <Typography variant='h4' mb={2} className={fontStyle.thirdTitle}>
          <Box className={fontStyle.thirdTitle}>
            {Content.basics.touchpoint.communication.title}
          </Box>
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
    </Box>
  )
}

export default Basic
