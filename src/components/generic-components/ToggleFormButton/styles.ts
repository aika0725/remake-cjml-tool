import styled from '@emotion/styled'

export const ToggleFormButton = styled.div`
  width: 37px;
  height: 60px;
  background-color: #fafaff;
  position: absolute;
  border-radius: 0px 4px 4px 0px;
  border: 1px solid #003968;
  border-left: 0px;
  top: 50px;
  left: 0px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: 0.25s;
  cursor: pointer;

  :hover {
    background-color: #ededf2;
  }

  img {
    width: 20px;
    height: auto;
  }

  @media (max-width: 900px) {
    display: none;
  }
`
