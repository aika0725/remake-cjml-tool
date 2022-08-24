import * as React from 'react'
import { formInitialValues, IFormData } from '../../interfaces/FormData'

export type FormContextType = {
  formContextValue: IFormData
  // eslint-disable-next-line @typescript-eslint/ban-types
  setFormContextValue: any
}
export const initialStatus: FormContextType = {
  formContextValue: formInitialValues,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormContextValue: () => {},
}
export const FormContext = React.createContext(initialStatus)
