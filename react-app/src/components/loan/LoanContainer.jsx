import React, {useState, useEffect} from 'react'
import LoanCalculator from './LoanCalculator'
import PaymentBreakdown from './PaymentBreakdown'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    // height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingBottom: theme.spacing(4),
    width: '100%',
  },
  appBarSpacer: theme.mixins.toolbar,
}))

const LoanContainer = () => {

  const [length, setLength] = useState(10);
  const [loanAmount, setLoanAmount] = useState(30000 / 0.20);
  const [downPayment, setDownPayment] = useState(30000);
  const [percent, setPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(2.5);
  const [balance, setBalance] = useState(30000 / 0.25);
  const [payment, setPayment] = useState(7000)


  const classes = useStyles()

  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item>
            <LoanCalculator length={length} setLength={setLength} loanAmount={loanAmount}
            setLoanAmount={setLoanAmount} downPayment={downPayment} setDownPayment={setDownPayment}
            percent={percent} setPercent={setPercent} interestRate={interestRate} setInterestRate={setInterestRate} 
            setBalance={setBalance}
            />
          </Grid>
          <Grid item>
            <PaymentBreakdown balance={balance} setBalance={setBalance} payment={payment} setPayment={setPayment} interestRate={interestRate}/>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default LoanContainer
