import React, { useState } from 'react'
import LoanCalculator from './LoanCalculator'
import PaymentChart from './PaymentChart'
import LoanTable from './LoanTable'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'Column',
    alignItems: 'flex-start'
  },
  paper_chart: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  }
}))

const LoanContainer = () => {

  const [length, setLength] = useState(120);
  const [loanAmount, setLoanAmount] = useState(30000 / 0.20);
  const [downPayment, setDownPayment] = useState(30000);
  const [percent, setPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(0.025);
  const [payment, setPayment] = useState(0)
  const [data, setData] = useState([])

  const classes = useStyles()

  const updateData = async () => {
    let date = new Date()
    let balance = loanAmount - downPayment;
    let principalData = 0;
    let interestData = 0;
    let monthlyRate = interestRate / 12
    let interestExpense = balance * monthlyRate

    let newData = [{ date, balance: balance, principal: principalData, interest: interestData, key:date }]

    let newPayment = balance / ((((1 + (monthlyRate)) ** length) - 1) / ((monthlyRate) * ((1 + (monthlyRate))** length)))
    if (payment > newPayment) {
      newPayment = payment
    }

    while (balance > 0) {
      interestExpense = (balance * (monthlyRate))
      if (balance - (newPayment - interestExpense) < 0) break;
      interestData = interestExpense + interestData
      principalData = principalData + (newPayment - interestExpense)
      balance = balance - (newPayment - interestExpense)
      date = new Date(date.setMonth(date.getMonth() + 1));

      // double counting something here w/ balance below 0
      newData.push({
        date,
        balance: balance,
        principal: principalData,
        interest: interestData,
        key: date,
      })
    }
    console.log(newData)

    newData.push({
      date: new Date(date.setMonth(date.getMonth() + 1)),
      balance: 0,
      principal: principalData + balance,
      interest: interestData,
      key: date
    })
    setData(newData)
  }

  const changePayment = (e) => {
    if (e.target.id === 'down-payment') {
      setDownPayment(e.target.value)
      setPercent((e.target.value / loanAmount) * 100)
    } else if (e.target.id === 'percentage') {
      if (e.target.value <= 0) {
        return
      }
      setPercent(e.target.value)
      setDownPayment(loanAmount * (e.target.value / 100))
    } else if (e.target.id === 'loan-amount') {
      setLoanAmount(e.target.value)
      setDownPayment(e.target.value * 0.20)
    } else {
      setLength(e.target.value)
    }
  }



  return (
    <main className={classes.content}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper variant='outlined' className={classes.paper}>
              <LoanCalculator length={length} setLength={setLength} loanAmount={loanAmount}
                setLoanAmount={setLoanAmount} downPayment={downPayment} setDownPayment={setDownPayment}
                percent={percent} setPercent={setPercent} interestRate={interestRate} setInterestRate={setInterestRate}
                updateData={updateData} changePayment={changePayment}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaymentChart payment={payment} setPayment={setPayment} interestRate={interestRate} data={data} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LoanTable data={data} />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default LoanContainer
