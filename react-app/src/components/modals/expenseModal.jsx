import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

export function FormDialog() {
  const [open, setOpen] = useState(false);
  const [expenseName, setExpenseName] = useState("")
  const [amount, setAmount] = useState(0)
  const [note, setNote] = useState("")
  const [date, setDate] = useState(new Date());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async () => {
    const response = await fetch('/api/expenses/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: expenseName,
        amount,
        date,
        note,
        category_id: 1
      })
    })
    let category = await response.json()
    if (category.category) {
      setOpen(false);
    }
  };

  const updateValue = (setter) => (e) => {
    setter(e.target.value)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Expense
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create your expenses!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Expense Name"
            type="text"
            value={expenseName}
            onChange={updateValue(setExpenseName)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            value={amount}
            onChange={updateValue(setAmount)}
            fullWidth
          />
          <TextField
          margin="dense"
          id="note"
          label="Note"
          type='text'
          value={note}
          onChange={updateValue(setNote)}
          multiline
          rows={3}
          />
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
