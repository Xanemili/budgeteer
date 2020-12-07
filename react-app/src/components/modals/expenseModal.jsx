import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import DatePicker from 'react-datepicker'
import IconButton from '@material-ui/core/IconButton'
import Create from '@material-ui/icons/Create'
import AddBox from '@material-ui/icons/AddBox'
import "react-datepicker/dist/react-datepicker.css";
import { ADD_EXPENSE, EDIT_EXPENSE } from '../../store/reducers/actions';

const ExpenseDialog = ({postUrl, buttonType, item}) => {
  const [open, setOpen] = useState(false);
  const [expenseName, setExpenseName] = useState(item ? item.name : "")
  const [amount, setAmount] = useState(item ? item.amount : 0)
  const [category, setCategory] = useState(item ? item.category_id : "")
  const [note, setNote] = useState(item ? item.note : item)
  const [date, setDate] = useState(new Date()); // note this needs to be updated for the edit form.
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event) => {
    const new_category = event.target.value;
    setCategory(new_category)
  };

  const updateValue = (setter) => (e) => {
    setter(e.target.value)
  }

  const handleSubmit = async () => {
    // this could be moved to the 'actions.js' file to consolidate. here to show issues with proxy requests.
    const response = await fetch(`/api/expenses/${postUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: expenseName,
        amount,
        date: date.toUTCString(),
        note,
        category_id: category
      })
    })
    let data = await response.json()
    if (!data.errors) {
      let type = (buttonType !== 'edit' ? ADD_EXPENSE : EDIT_EXPENSE);

      dispatch({type, data: data})
      setOpen(false);
    } else {
      console.log(category.errors)
    }
  };

  return (
    <div>
      <IconButton aria-label='edit expense' size='small' onClick={handleClickOpen}>
        {buttonType === 'edit' ? <Create /> : <AddBox />}
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Expense</DialogTitle>
        <DialogContent>
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
          <FormControl fullWidth>
            <InputLabel htmlFor='Category'>Category</InputLabel>
            <Select
              native
              id='category'
              value={category}
              onChange={handleChange}
            >
              {categories.map( categoryOption => {
                return (
                  <option key={categoryOption.id} value={categoryOption.id}>{categoryOption.name}</option>
                )
              })}
            </Select>
          </FormControl>
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
            id="date"
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


export default ExpenseDialog
