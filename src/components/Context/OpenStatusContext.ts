import * as React from 'react'

export type OpenContext = {
  open: any
  //   setOpen: React.Dispatch<React.SetStateAction<Context>>
  setOpen: any
}
export const initialStatus: OpenContext = {
  open: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOpen: () => {},
}
export const OpenStatusContext = React.createContext(initialStatus)
