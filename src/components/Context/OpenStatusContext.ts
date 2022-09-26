import * as React from 'react'

const useFormOpen = () => {
  const [open, setOpen] = React.useState<OpenContext['open']>(true)
}

export type OpenContext = {
  open: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: (status: boolean) => any
}
export const initialStatus: OpenContext = {
  open: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOpen: () => {},
}
export const OpenStatusContext = React.createContext(initialStatus)
