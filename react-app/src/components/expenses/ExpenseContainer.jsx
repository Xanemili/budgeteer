import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../../store/reducers/actions';
import ExpenseCategory from './ExpenseCategory'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody';


const ExpenseContainer = () => {

  const expenses = useSelector(state => state.expenses)
  const dispatch = useDispatch();



  useEffect(() => {
    const route = 'expenses'
    try {
      dispatch(loadData(route))
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <TableContainer componenet={Paper}>
      <Table aria-label='expense table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Category</TableCell>
            <TableCell></TableCell>
            <TableCell>Expense</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(expenses).map(key => <ExpenseCategory key={key} name={key} category={expenses[key]} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseContainer
