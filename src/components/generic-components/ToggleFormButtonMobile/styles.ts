import styled from '@emotion/styled'

export const ToggleFormButtonMobile = styled.div`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #ededed;
  border: 2px solid black;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 9999;
  transition: 0.25s;
  cursor: pointer;
  display: none;

  :hover {
    background: #e0e0e0;
  }

  img {
    width: 20px;
    height: auto;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`
