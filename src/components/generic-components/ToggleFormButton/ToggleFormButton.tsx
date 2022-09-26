import { useFormOpenStatus } from '../../../hooks/useFormOpenStatus'
import * as S from './styles'

const ToggleFormButton = () => {
  const { open, setOpen } = useFormOpenStatus()
  return (
    <S.ToggleFormButton onClick={() => setOpen(!open)}>
      {open ? (
        <>
          <img src='icons/left_arrow.png' style={{ height: 20, width: 'auto' }} />
        </>
      ) : (
        <>
          <img src='icons/edit_icon.png' />
        </>
      )}
    </S.ToggleFormButton>
  )
}

export default ToggleFormButton
