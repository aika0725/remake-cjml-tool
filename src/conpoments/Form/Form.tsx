import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import ActorCard from '../ActorCard/ActorCard'

import { FieldArray, Formik, FormikProps } from 'formik'

import * as yup from 'yup'
import { IFormData } from '../../interfaces/FormData'

import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import TouchpointCard from '../TouchpointCard/TouchpointCard'
import { Divider } from '@mui/material'

const validationSchema = yup.object({
  actors: yup.array().of(
    yup.object({
      actorName: yup.string().required('Actor name is required'),
      actorRole: yup.string().required('Actor role is required'),
    }),
  ),
  touchpoints: yup.array().of(
    yup.object({
      senderName: yup.string().required('Sender/Initiator name is required'),
      senderDescription: yup.string().required('Activity description is required'),
    }),
  ),
})

function Form() {
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

  const formInitialValues: IFormData = {
    actors: [{ id: 0, actorName: '', actorRole: '' }],
    touchpoints: [
      {
        id: 0,
        type: '',
        channel: '',
        senderName: '',
        senderDescription: '',
        senderRiskCategory: '',
        receiverName: '',
        receiverDescription: '',
        receiverRiskCategory: '',
      },
    ],
  }

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
            initialValues={formInitialValues}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2))
            }}
            validationSchema={validationSchema}
          >
            {(formikProps: FormikProps<IFormData>) => {
              console.log(formikProps.values.actors)
              console.log(formikProps)
              return (
                <form onSubmit={formikProps.handleSubmit}>
                  <h2>Actors</h2>
                  {/* ---------------------------------- */}
                  <FieldArray
                    name='actors'
                    render={(arrayHelpers) => (
                      <div>
                        {formikProps.values.actors.map((actor, index) => (
                          <div key={index}>
                            {/** both these conventions do the same */}
                            <ActorCard
                              name={`actors[${index}].actorName`}
                              role={`actors[${index}].actorRole`}
                              index={index}
                            />

                            <Button
                              variant='outlined'
                              startIcon={<DeleteIcon />}
                              onClick={() => arrayHelpers.remove(index)}
                              color='error'
                            >
                              Delete
                            </Button>
                          </div>
                        ))}

                        <Button
                          variant='outlined'
                          startIcon={<AddIcon />}
                          onClick={() => arrayHelpers.push({ id: 0, actorName: '', actorRole: '' })}
                        >
                          New actor
                        </Button>
                      </div>
                    )}
                  />
                  <br />
                  <Divider variant='middle' />
                  <br />
                  <h2>Touchpoints</h2>
                  <TouchpointCard />
                  {/* -------------------------------- */}
                  
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
