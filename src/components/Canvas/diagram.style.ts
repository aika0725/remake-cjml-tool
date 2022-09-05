import styled from '@emotion/styled'

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
  justify-content: flex-start;
  min-width: 295px;
`
export const SwimlaneActorInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90px;
  white-space: normal;
  word-wrap: break-word;
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
  display: flex;
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
  border-radius: 10px;
`

export const ChannelImage = styled.div`
  width: 28px;
  height: auto;
  img {
    margin-right: 10px;
    display: flex;
    width: 100%;
    height: auto;
  }
`
export const CommunicationContent = styled.div`
  width: 130px;
  margin-right: 5px;
  display: flex;
  word-wrap: break-word;
  left: 48px;
  position: absolute;
`
export const Arrow = styled.div<{ length: number }>`
  position: absolute;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-left: 82px;
  height: ${(props) => props.length > 1 && props.length * 126 - 70 + 'px'};
  z-index: 99;
  &.up {
    margin-bottom: 125px;
    margin-bottom: ${(props) => props.length > 1 && props.length * 126 + 'px'};
  }

  &.down {
    margin-bottom: -125px;
    margin-bottom: ${(props) => props.length > 1 && props.length * -126 + 'px'};
    transform: rotate(180deg);
  }
`
