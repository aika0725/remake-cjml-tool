import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import Test from '../Test/test'

import { Formik, FormikProps } from 'formik'

import * as yup from 'yup'
import { IFormData } from '../../interfaces/FormData'

const validationSchema = yup.object({
  actors: yup.array().of(
    yup.object({
      actorName: yup.string().required('Actor name is required'),
      actorRole: yup.string().required('Actor Role is required'),
    }),
  ),
})
// actorName: yup.string().required('Actor name is required'),
// actorRole: yup.string().required('Actor Role is required'),

function Form() {
  // Set window status -----------------------------
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = React.useRef<HTMLElement>(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Button onClick={handleClickOpen()}>open</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby='form-dialog'
        aria-describedby='form-dialog-window'
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle id='form-dialog'>Create a CJML diagram</DialogTitle>
        <DialogContent dividers={true}>
          <Formik
            initialValues={{
              actors: [
                { id: 0, actorName: '', actorRole: '' },
                { id: 1, actorName: '', actorRole: '' },
              ],
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2))
            }}
            validationSchema={validationSchema}
          >
            {(formikProps: FormikProps<IFormData>) => {
              console.log(formikProps.values.actors[0].actorName)
              return (
                <form onSubmit={formikProps.handleSubmit}>
                  <Test />
                  <Button color='primary' variant='contained' fullWidth type='submit'>
                    Submit
                  </Button>
                </form>
              )
            }}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Form
