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
const FormContainer = styled.div<OpenContext['open']>`
  box-sizing: border-box;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  height: 90%;
  width: 50%;
  max-width: 722px;
  background-color: #fafaff;
  border-right: 1px solid #003968;
  position: absolute;
  left: 0;
  top: 77px;
  padding: 0px 30px;
  margin-left: 7.5px;
  overflow-y: auto;

  @media (max-width: 550px) {
    width: 100%;
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

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }))

export {
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
