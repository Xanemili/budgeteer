import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBox from '@material-ui/icons/AddBox'
import IconButton from '@material-ui/core/IconButton'

export default function CategoryModal() {
  const [open, setOpen] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState("")
  const [goal, setGoal] = React.useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCategoryName("")
    setOpen(false)
  }

  const handleSubmit = async () => {
    const response = await fetch('/api/categories/create', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: categoryName,
        goal
      })
    })
    let category = await response.json()
    if (category.category){
      setOpen(false);
    }
  };


  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <AddBox />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Category</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="goal"
            label="Goal"
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            fullWidth
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
