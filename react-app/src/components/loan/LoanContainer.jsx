import React from 'react'
import LoanCalculator from './LoanCalculator'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const LoanContainer = () => {

  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <LoanCalculator />
      </Container>
    </main>
  )
}

export default LoanContainer
