import styled from '@emotion/styled'
import { CommunicationRole } from './CommunicationBox'

export const CommunicationBoxStyled = styled.div<{ role: CommunicationRole }>`
  padding: 10px;
  margin-left: 20px;
  width: 12rem;
  height: auto;
  background-color: ${(props) => (props.role === CommunicationRole.Sender ? '#dbeef4' : '#fff')};
  border: 2px #31859c solid;
  border-radius: 10px;
  display: flex;
  font-size: 0.8em;
  align-items: center;
  position: relative;
`
