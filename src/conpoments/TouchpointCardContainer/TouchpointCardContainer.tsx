import React from 'react'

import ActionCard from '../ActionCard/ActionCard'
import CommunicationCard from '../CommunicationCard/CommunicationCard'

type Props = {
  type: string
}

const TouchpointCardContainer = (props: Props) => {
  console.log(props.type)
  return <div>{props.type === 'action' ? <ActionCard /> : <CommunicationCard />}</div>
}

export default TouchpointCardContainer
