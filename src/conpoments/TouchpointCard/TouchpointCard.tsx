import React, { useState } from 'react'

import TouchpointCardContainer from '../TouchpointCardContainer/TouchpointCardContainer'
import TouchpointTypeButtons from '../TouchpointTypeButtons/TouchpointTypeButtons'

const TouchpointCard = () => {
  const [type, setType] = useState('')
  const [hasChosen, setHasChosen] = useState(false)

  const showCard = (value: string) => {
    // value === 'action' ? <ActionCard /> : <CommunicationCard />
    console.log(`this is ${value}`)
    setHasChosen(true)
    setType(value)
  }
  return (
    <div>
      {hasChosen === true ? (
        <TouchpointCardContainer type={type} />
      ) : (
        <TouchpointTypeButtons
          display={(type) => {
            showCard(type)
          }}
        />
      )}
    </div>
  )
}

export default TouchpointCard
