import * as React from 'react'
import ArrowBody from './ArrowBody'
import ArrowHead from './ArrowHead'
import * as D from '../diagram.style'
import { ArrowInfo } from '../CommunicationBox/CommunicationBox'

const Arrow = (props: ArrowInfo) => (
  <>
    <D.ArrowHead direction={props.direction} length={props.length}>
      <ArrowHead />
    </D.ArrowHead>
    <ArrowBody />
  </>
)

export default Arrow
