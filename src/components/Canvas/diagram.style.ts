import styled from '@emotion/styled'
import { style } from '@mui/system'

// interface ISwimlaneRow {
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   children?: React.ReactNode
// }

// export const SwimlaneRow = styled.div<ISwimlaneRow>`
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
