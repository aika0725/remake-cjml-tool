import styled from '@emotion/styled'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import React from 'react'

export const SwimlaneRow = styled.div`
  background-color: #f2f2f2;
  border: 3px #d8d8d8 solid;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  width: fit-content;
  /* height: 1in; */
  height: 70px;
  padding: 15px;
  margin: 20px;
  display: flex;
  justify-content: center;
`
export const SwimlaneActorInfo = styled.div`
  padding: 10px;
  width: 2rem;
  height: auto;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  font-family: Calibri;
  font-size: 0.833336em;
`

export const actorIcon = styled.div`
  margin: auto;
  /* width: 22px;
    height: 28px; */
  width: 140%;
  height: 90%;
`
export const SwimeLineAction = styled.div`
  padding: 10px;
  margin-left: 20px;
  width: 12rem;
  height: auto;
  background-color: #ffffff;
  border: 2px #7f7f7f solid;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  display: flex;
  font-family: Calibri;
  font-size: 0.8em;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const TransparentBox = styled.div`
  padding: 10px;
  margin-left: 20px;
  width: 12rem;
  height: auto;
  /* border: 2px #31859c solid; */
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`
type SwimlaneContentType = {
  children?: React.ReactNode | JSX.Element | JSX.Element[] | void
}
export const SwimlaneSender = styled.div<SwimlaneContentType>`
  padding: 10px;
  margin-left: 20px;
  width: 12rem;
  height: auto;
  background-color: #dbeef4;
  border: 2px #31859c solid;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  display: flex;
  font-family: Calibri;
  font-size: 0.8em;
  align-items: center;
  /* justify-content: center; */
  position: relative;
`
export const SwimlaneReceiver = styled.div`
  padding: 10px;
  margin-left: 20px;
  width: 12rem;
  height: auto;
  background-color: #ffffff;
  border: 2px #31859c solid;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  display: flex;
  font-family: Calibri;
  font-size: 0.8em;
  align-items: center;
  position: relative;
`
export const ChannelImage = styled.div`
  margin-right: 10px;
  display: flex;
  position: absolute;
  margin: auto;
  width: 28px;
  height: auto;
`
export const CommunicationContent = styled.div`
  width: 130px;
  margin-right: 5px;
  display: flex;
  word-wrap: break-word;
  left: 48px;
  position: absolute;
`
// export const Arrow =styled.div`
//   position: absolute;
//   width: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: ${(props) => (props.direction ==='up' ? 120 : 46)}px;
//   margin-left: ${(props) => (props.direction ==='up' ? 80 : 70)}px;
//   transform:  ${(props) => (props.direction ==='up' ? '' : 'rotate(180deg)')};
//   margin-bottom: ${(props) => (props.direction ==='up' ? 200 : -100)}px;
// `
type ArrowType = {
  direction: string
}
export const ArrowHead: any = styled.div<ArrowType>`
  position: absolute;
  top: 66px;
  left: 6rem;
  transform: ${(props) => (props.direction === 'up' ? '' : 'rotate(180deg)')};
`

export const ArrowBody = styled.div`
  height: 100%;
  min-height: 13px;
`
