import * as React from 'react'
import ArrowBody from './ArrowBody'
import ArrowHead from './ArrowHead'
import * as D from '../diagram.style'
import { ArrowDirection, ArrowInfo } from '../CommunicationBox/CommunicationBox'

const Arrow = (props: ArrowInfo) => (
  <>
    <D.Arrow
      length={props.length}
      className={props.direction === ArrowDirection.Up ? ArrowDirection.Up : ArrowDirection.Down}
    >
      <ArrowHead />
      <ArrowBody />
    </D.Arrow>
  </>
)

export default Arrow
