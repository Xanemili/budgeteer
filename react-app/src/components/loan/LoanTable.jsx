import React from 'react'
import { TableContainer } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import Table from '@material-ui/core/Table'

const LoanTable = ({data}) => {

  return (
    <TableContainer>
      <Table aria-label='amortization table'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!data ? null : data.map(paymentData => (
            <TableRow>
              <TableCell>{paymentData.date.toString()}</TableCell>
              <TableCell>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(paymentData.balance)}</TableCell>
              <TableCell>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(paymentData.principal)}</TableCell>
              <TableCell>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(paymentData.interest)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LoanTable
