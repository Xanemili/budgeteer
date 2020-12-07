import React from 'react'
import { useSelector} from 'react-redux'

import ExpenseCategory from './ExpenseCategory'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody';
import ExpenseDialog from '../modals/expenseModal';


const ExpenseTable = () => {

  const expenses = useSelector(state => state.expenses)

  return (
    <TableContainer componenet={Paper}>
      <Table aria-label='expense table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <ExpenseDialog postUrl='create' buttonType='create'/>
            </TableCell>
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

export default ExpenseTable
