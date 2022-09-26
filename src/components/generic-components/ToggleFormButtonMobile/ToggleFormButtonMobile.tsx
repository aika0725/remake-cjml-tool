import React from 'react'
import { useFormOpenStatus } from '../../../hooks/useFormOpenStatus'
import * as S from './styles'

const ToggleFormButtonMobile = () => {
  const { open, setOpen } = useFormOpenStatus()
  return (
    <S.ToggleFormButtonMobile onClick={() => setOpen(!open)}>
      {open ? (
        <>
          <img src='icons/left_arrow.png' style={{ height: 20, width: 'auto' }} />
        </>
      ) : (
        <>
          <img src='icons/edit_icon.png' />
        </>
      )}
    </S.ToggleFormButtonMobile>
  )
}

export default ToggleFormButtonMobile
