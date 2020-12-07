import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'

const LoanCalculator = () => {
  const [length, setLength] = useState(10)
  const [loanAmount, setLoanAmount] = useState(30000 / 0.20)
  const [downPayment, setDownPayment] = useState(30000)
  const [percent, setPercent] = useState(0.20)
  const [interestRate, setInterestRate] = useState(2.5)

  const setPayment = (e) => {
    console.log(e.target)
    if (e.target.id === 'down-payment'){
      setDownPayment(e.target.value)
      setPercent(e.target.value / loanAmount)
    } else if (e.target.id === 'percentage'){
      setPercent(e.target.value)
      setDownPayment(loanAmount * percent)
    }
  }

  return (
    <Paper variant='outlined'>
      <form>
        <TextField
          id='loan-amount'
          label='Loan Amount'
          value={loanAmount}
          onChange={(e) => setPayment(e)}
          type='number' />
        <div>
        <TextField
          id='down-payment'
          label='Down Payment'
          value={downPayment}
          onChange={(e)=>setPayment(e)}
          type='number'/>
        <TextField
          id='percentage'
          value={percent}
          label='%'
          onChange={(e)=>setPayment(e)}
          type='text'
        />
        </div>
        <FormControl>
          <InputLabel id='length-label'>Length of Loan</InputLabel>
          <Select
            labelId='length-label'
            id='length'
            fullWidth
            value={length}
            onChange={(event) => setLength(event.target.value)}
          >
            <MenuItem value={10}>10 Years</MenuItem>
            <MenuItem value={15}>15 Years</MenuItem>
            <MenuItem value={20}>20 Years</MenuItem>
            <MenuItem value={30}>30 Years</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id='interest-rate'
          label='Interest Rate'
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          type='number'/>
      </form>
    </Paper>
  )
}

export default LoanCalculator
