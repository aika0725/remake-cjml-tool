import styled from '@emotion/styled'

const FormCard = styled.div`
  /* height: fit-content; */
  margin: 1.5rem 0;

  border-style: solid;
  border-color: #d5d5d5;
  padding: 25px;
  border-radius: 16px;
`

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
`

const TouchpointContainer = styled.div`
  padding: 16px 0 0 0;
`
export { FormCard, CardTitle, TouchpointContainer }
