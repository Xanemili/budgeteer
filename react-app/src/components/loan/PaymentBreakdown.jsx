import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { TableContainer, Typography } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import Table from '@material-ui/core/Table'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const PaymentBreakdown = ({balance, setBalance, payment, setPayment, interestRate}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = () => {
      const startDate = new Date()
      let date = startDate;
      let balanceData = balance;
      let principalData = 0;
      let interestData = 0;
  
      let newData = [{date, balance: balanceData, principal: principalData, interest: interestData}]
  
      while (balanceData > 0) {
        let interestExpense =  (balanceData * (interestRate/100))
        interestData = interestExpense + interestData
        principalData = principalData + (payment - interestExpense)
        balanceData = balanceData - (payment - interestExpense)
        date = new Date(date.setMonth(date.getMonth() +1));
        newData.push({
          date,
          balance: balanceData,
          principal: principalData,
          interest: interestData
        })
      }
      console.log(newData)
      setData(newData)
    }
    updateData()
  }, [balance, setBalance])


  return (
    <Paper>
      <Grid container spacing={3} width='100%'>
        <Grid item xs={3}>
          <ResponsiveContainer width={900} height={500}>

          <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
          // implement mouseover update of state here
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis type='number' domain={['auto', 'dataMax + 20000']} interval={0}/>
            <Tooltip />
            <Area type="monotone" dataKey="balance" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="principal" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="interest" stackId="2" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
          </ResponsiveContainer>
        </Grid>
        
      </Grid>
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
                {!data ? null : data.map( paymentData => (
                  <TableRow>
                    <TableCell>{paymentData.date.toString()}</TableCell>
                    <TableCell>{new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(paymentData.balance)}</TableCell>
                    <TableCell>{new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(paymentData.principal)}</TableCell>
                    <TableCell>{new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(paymentData.interest)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            
          </TableContainer>
    </Paper>
  )
}

export default PaymentBreakdown
