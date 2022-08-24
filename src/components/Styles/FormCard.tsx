import styled from '@emotion/styled'
import { Typography, withStyles } from '@material-ui/core'
import { createTheme } from '@mui/material'
import { OpenContext } from '../Context/OpenStatusContext'

const FormCard = styled.div`
  /* height: fit-content; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px 30px;
  margin-bottom: 15px;

  width: 100%;
  height: auto;

  background: #ffffff;

  border: 1px solid #003968;
  border-radius: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
`
const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  width: 100%;
  gap: 16px;
  margin-top: 20px;
`

const Section = styled.section`
  width: 100%;
  height: auto;

  margin-top: 35px;
`
const SectionTitle = styled.div`
  margin-bottom: 20px;
`
type FormResize = {
  open: OpenContext['open']
  width: number
}

const FormContainer = styled.div<FormResize>`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 50%;
  margin-left: ${(props) => (props.open ? 0 : -(props.width - 43))}px;
  max-width: 722px;
  background-color: #fafaff;
  border-right: 1px solid #003968;
  left: 0;
  top: 77px;
  padding: 0px 30px;
  overflow-y: auto;
  /* transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-95%)')}; */

  @media (max-width: 566px) {
    width: 100%;
    margin-left: -${(props) => props.width}px;
  }
`

const TouchpointContainer = styled.div`
  padding: 16px 0 0 0;
`
const FontTheme = createTheme({
  typography: {
    fontSize: 13,
  },
})

const BlacLabelTextTypography = withStyles({
  root: {
    color: '#000000',
    fontSize: 13,
  },
})(Typography)

const CJMLFormHeaderTypography = withStyles({
  root: {
    color: '#003968',
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    fontWeight: 600,
  },
})(Typography)

const Canvas = styled.div`
  top: 77px;
  margin-top: 7px;
`
const Main = styled.div<OpenContext['open']>`
  display: flex;
  height: calc(100vh - 68.5px);
  flex-direction: row;
  /* transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-35%)')}; */

  @media (max-width: 566px) {
    flex-direction: column;
  }
`

export {
  Main,
  Canvas,
  FormContainer,
  FormHeader,
  Row,
  FormCard,
  CardHeader,
  TouchpointContainer,
  FontTheme,
  BlacLabelTextTypography,
  Section,
  SectionTitle,
  CJMLFormHeaderTypography,
}
