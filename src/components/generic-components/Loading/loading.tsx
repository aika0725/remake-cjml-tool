import { CircularProgress } from '@mui/material'
import * as S from './styles'

function Loading() {
  return (
    <S.LoadingWrapper>
      <CircularProgress />
    </S.LoadingWrapper>
  )
}

export default Loading
