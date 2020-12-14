import React from 'react'
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
  },
  appBarSpacer: theme.mixins.toolbar,
}))

const LoanContainer = () => {

  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item>
            <LoanCalculator />
          </Grid>
          <Grid item>
            <PaymentBreakdown />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default LoanContainer
