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
import CategoryModal from '../modals/CategoryModal';
import Typography from '@material-ui/core/Typography'


const ExpenseTable = () => {

  const expenses = useSelector(state => state.expenses)
  const categories = useSelector(state => state.categories)

  return (
    <TableContainer componenet={Paper}>
      <Table aria-label='expense table'>
        <TableHead>
          <TableRow>
            <TableCell>
              Create Expense
              <ExpenseDialog postUrl='create' buttonType='create'/>
            </TableCell>
            <TableCell> 
              <div className='table-container__category'>
                <Typography variant='h6'>  
                Category 
                </Typography>
                <CategoryModal /> 
              </div></TableCell>
            <TableCell>
            <Typography variant='h6'>  
                Goal
            </Typography>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map(category => <ExpenseCategory key={category.name} name={category.name} categoryExpenses={expenses[category.name]} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseTable
