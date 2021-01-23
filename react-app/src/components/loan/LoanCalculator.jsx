import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'Column',
    alignItems: 'flex-start'
  },
  form: {
    width: '100%'
  },
  slider: {
    margin: theme.spacing(4)
  }
}));

const LoanCalculator = (props) => {

  const {length, setLength, loanAmount, setLoanAmount, downPayment, setDownPayment, percent, setPercent, interestRate, setInterestRate, setBalance} = props
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    setLoanAmount(newValue)
    setDownPayment(newValue * (percent/100))
  }

  const setPayment = (e) => {
    if (e.target.id === 'down-payment') {
      setDownPayment(e.target.value)
      setPercent((e.target.value / loanAmount)*100)
      setBalance(loanAmount - e.target.value)
    } else if (e.target.id === 'percentage') {
      setPercent(e.target.value)
      setDownPayment(loanAmount * (e.target.value/100))
      setBalance(loanAmount - loanAmount * (e.target.value/100))
    }
  }

  return (
    <Paper variant='outlined' className={classes.paper}>
      <form className={classes.form}>
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={0} direction='row' alignItems='stretch' justify='space-around'>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  id='loan-amount'
                  label='Loan Amount'
                  value={loanAmount}
                  onChange={(e) => setPayment(e)}
                  type='number' />
              </Grid>
              <Grid item xs={9}>
                <Paper elevation={0} variant='outlined'>
                  <Slider value={loanAmount} onChange={handleChange} min={30000} max={1000000} step={2000} aria-labelledby="loan-principal"/>
                </Paper>
              </Grid>
            </Grid>
          <Grid item xs={10}>
            <TextField
              variant='outlined'
              id='down-payment'
              label='Down Payment'
              value={downPayment}
              onChange={(e) => setPayment(e)}
              type='number' />
            <TextField
              variant='outlined'
              id='percentage'
              value={percent}
              label='%'
              onChange={(e) => setPayment(e)}
              type='text'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl margin="normal">
              <InputLabel id='length-label'>Length of Loan</InputLabel>
              <Select
                labelId='length-label'
                id='length'
                fullWidth
                value={length}
                onChange={(event) => setLength(event.target.value)}
                variant='outlined'
              >
                <MenuItem value={10}>10 Years</MenuItem>
                <MenuItem value={15}>15 Years</MenuItem>
                <MenuItem value={20}>20 Years</MenuItem>
                <MenuItem value={30}>30 Years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='interest-rate'
              label='Interest Rate'
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              type='number'
              variant='outlined'/>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default LoanCalculator
