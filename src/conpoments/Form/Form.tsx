import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import ActorCard from '../ActorCard/ActorCard'
import ButtonAdd from '../ButtonAdd/ButtonAdd'

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
        <form>
          <DialogContent dividers={true}>
            <div>Actors</div>
            <ActorCard />
            <ActorCard />
            <ButtonAdd />
            <div>Touchpoints</div>
            <ButtonAdd />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default Form
