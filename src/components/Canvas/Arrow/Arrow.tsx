import * as React from 'react'
import ArrowBody from './ArrowBody'
import ArrowHead from './ArrowHead'
import * as D from '../diagram.style'

type Props = {
  direction: string
}

const Arrow = (props: Props) => (
  <>
    <D.ArrowHead direction={props.direction}>
      <ArrowHead />
    </D.ArrowHead>
    <ArrowBody />
  </>
)

export default Arrow
