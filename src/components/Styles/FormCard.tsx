import styled from '@emotion/styled'
import { Typography, withStyles } from '@material-ui/core'
import { createTheme, keyframes } from '@mui/material'

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`

const FormCard = styled.div`
  animation-name: ${breatheAnimation};
  animation-duration: 0.25s;
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

  transition: 0.5s;
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

const Canvas = styled.div`
  overflow: auto;
  height: fit-content;
  position: relative;
  padding: 10px;
`

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 68.5px);
`

const FormContainer = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 650px;
  background-color: #fafaff;
  border-right: 1px solid #003968;
  top: 0;
  padding: 0px 30px;
  overflow-y: auto;
  position: relative;
  transition: ease-in-out 0.25s;
  margin-left: ${(props) => (props.open ? '0px' : '-610px')};

  @media (max-width: 1536px) {
    max-width: 600px;
    margin-left: ${(props) => (props.open ? '0px' : '-570px')};
  }

  @media (max-width: 1200px) {
    max-width: 500px;
    margin-left: ${(props) => (props.open ? '0px' : '-480px')};
  }

  @media (max-width: 900px) {
    /* width: unset; */
    max-width: 100%;
    min-width: 100%;
    position: absolute;
    z-index: 999;
    margin-left: unset;
    top: 56px;
    transform: ${(props) => !props.open && 'translateX(-100%)'};
    /* max-width: unset; */
    /* display: none; */
    /* margin-left: ${(props) => (props.open ? '0px' : '-200px')}; */
    /* display: ${(props) => !props.open && 'none'}; */
  }

  @media (max-width: 600px) {
    /* width: 100%; */
    /* max-width: unset; */
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
