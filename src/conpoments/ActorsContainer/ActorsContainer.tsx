import React, { useState } from 'react'
import { IActor } from '../../interfaces/Actor'
import ActorCard from '../ActorCard/ActorCard'
import ButtonAdd from '../ButtonAdd/ButtonAdd'

// const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
//   console.log(event.target)
//   console.log(text)
// }

const cards: React.ReactElement[] = []

type actorProps = {
  actorData?: IActor[]
}

const ActorsContainer = (props: actorProps) => {
  const [actorCardNum, setActorCardNum] = useState(0)
  const [actorInfo, setActorInfo] = useState(props.actorData)
  //   要保留state 因为如果删掉 该component将不会刷新， 在引进新的props之前不动
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    console.log(event.target)
    console.log(text)
    setActorCardNum(actorCardNum + 1)
    cards.push(<ActorCard key={Math.random() * (1000 - 1) + 1} order={cards.length + 1} />)
    console.log(cards)
    console.log(actorInfo)
  }

  return (
    <>
      <div>Actors</div>
      <div>now there are {actorCardNum} actor cards</div>
      {cards.map((card, index) => (
        <ActorCard key={Math.random() * (1000 - 1) + 1} order={index + 1} />
      ))}
      <ButtonAdd handleClick={(e) => handleClick(e, 'add actor card')} />
    </>
  )
}
export default ActorsContainer
