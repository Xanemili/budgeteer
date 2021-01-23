import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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

  const { changePayment, length, percent, setPercent, interestRate, setInterestRate, setBalance, updateData } = props
  const classes = useStyles()

  return (
    <form className={classes.form}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={0} direction='row' alignItems='stretch' justify='space-around'>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              id='loan-amount'
              label='Loan Amount'
              value={props.loanAmount}
              onChange={(e) => changePayment(e)}
              type='number' />
          </Grid>
          {/* <Grid item xs={9}>
                <Paper elevation={0} variant='outlined'>
                  <Slider value={loanAmount} onChange={handleChange} min={30000} max={1000000} step={2000} aria-labelledby="loan-principal"/>
                </Paper>
              </Grid> */}
        </Grid>
        <Grid item xs={10}>
          <TextField
            variant='outlined'
            id='down-payment'
            label='Down Payment'
            value={props.downPayment}
            onChange={(e) => changePayment(e)}
            type='number' />
          <TextField
            variant='outlined'
            id='percentage'
            value={percent}
            label='%'
            onChange={(e) => changePayment(e)}
            type='text'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="normal">
            <InputLabel id='loan-length-label'>Length of Loan</InputLabel>
            <Select
              labelId='length-label'
              id='loan-length'
              fullWidth
              value={length}
              onChange={(e) => changePayment(e)}
              variant='outlined'
            >
              <MenuItem value={10*12} >10 Years</MenuItem>
              <MenuItem value={15*12} >15 Years</MenuItem>
              <MenuItem value={20*12} >20 Years</MenuItem>
              <MenuItem value={30*12} >30 Years</MenuItem>
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
            variant='outlined' />
        </Grid>
        <Grid item xs={7}>
          <Button variant='outlined' color='primary' onClick={() => updateData()}>
            Calculate
            </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoanCalculator
