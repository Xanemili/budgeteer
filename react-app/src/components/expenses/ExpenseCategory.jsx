import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteExpense} from '../../store/reducers/actions'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Delete from '@material-ui/icons/Delete'
import ExpenseDialog from '../modals/expenseModal'
import TagList from '../tags/TagList'
import { Typography } from '@material-ui/core';

const ExpenseCategory = ({ name, categoryExpenses }) => {

  const [open, setOpen] = useState(false)
  const [summedExpenses, setSummedExpenses] = useState(0)
  const category = useSelector(state => state.categories.find(cat => cat.name === name))

  const dispatch = useDispatch()



  useEffect(() => {
    if (category) {
      let new_sum = (categoryExpenses.reduce((acc, expense) => {
        return expense.amount + acc
      }, 0) / category.goal) * 100
      setSummedExpenses(Math.round(new_sum))
    } else {
      return
    }
  }, [category, categoryExpenses])



  const expenseCreator = (item) => {
    return (
      <TableRow key={item.id}>
        <TableCell component='th' scope='row'>
          {item.payment_date}
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>
          <TagList tags={item.tags} id={item.id}/>
        </TableCell>
        <TableCell>{!item.frequency ? null : 2}</TableCell> 
        <TableCell align='right'>{item.amount}</TableCell>
        <TableCell>
            <ExpenseDialog
              postUrl={item.id}
              buttonType='edit'
              item={item}
            />
        </TableCell>
        <TableCell>
          <IconButton aria-label='edit expense' size='small' onClick={() => dispatch(deleteExpense(item.id))}>
            <Delete />
          </IconButton>
        </TableCell>
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
            {category ?
          <Box display='flex' alignItems='center' className='goal-progress' justifyContent='space-between'>
            <Box>
              <Typography variant='body2' color='textSecondary'>
                {new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(category.goal)}
              </Typography>
            </Box>
            <Box width='70%' mr={1}>
              <LinearProgress variant='determinate' value={summedExpenses > 100 ? 100 : summedExpenses} />
            </Box>
            <Box>
              <Typography variant='body2' color={!(summedExpenses > 100) ? 'textSecondary' : 'error'}>
                {`${summedExpenses}%`}
              </Typography>
            </Box>
          </Box> :
            null }
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
                    <TableCell>Tags</TableCell>
                    <TableCell>Next Payment Date</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell />
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categoryExpenses.map(expense => expenseCreator(expense))}
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
