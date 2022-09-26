import { createContext, ReactNode, useContext, useState } from 'react'

type OpenStatusContextType = {
  open: boolean
  setOpen: (bool: boolean) => void
}

const OpenStatusContext = createContext({} as OpenStatusContextType)

type Props = {
  children: ReactNode
}

// This export the component that contains the context provider
export const OpenStatusContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <OpenStatusContext.Provider value={{ open, setOpen }}>{children}</OpenStatusContext.Provider>
  )
}

// Hook
export const useFormOpenStatus = (): OpenStatusContextType => {
  const context = useContext(OpenStatusContext)

  if (!context) {
    throw new Error('useFormOpenStatus must be used inside a OpenStatusContextProvider')
  }

  return context
}
