import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const ExpenseCategory = ({ name, category }) => {

  const [open, setOpen] = useState(false)

  const expenseCreator = (item) => {
    return (
      <TableRow key={item.id}>
        <TableCell component='th' scope='row'>
          {item.payment_date}
        </TableCell>
        <TableCell>{item.id}</TableCell>
        <TableCell align='right'>{item.amount}</TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {name}
        </TableCell>
        <TableCell>
          <Box>
            <LinearProgress variant='determinant' value={42}/>
          </Box>
        </TableCell>
        <TableCell>
          Expense
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={4}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {category.map(expense => expenseCreator(expense))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default ExpenseCategory;

// When updating to add new columns, make sure to update the 'colSpan' attribute on the nested TableCell to ensure it wraps the length of the table.
