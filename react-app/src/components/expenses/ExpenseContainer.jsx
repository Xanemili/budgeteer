import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { loadExpenses, loadCategories } from '../../store/reducers/actions';
import ExpenseTable from './ExpenseTable';
import CustomPieChart from '../charts/PieChart'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const ExpenseContainer = () => {

  const dispatch = useDispatch();
  const classes = useStyles()

  useEffect(() => {
    try {
      dispatch(loadExpenses())
      dispatch(loadCategories())
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <main className={classes.content}>
    <CssBaseline />
    <Container maxWidth='xl' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={3}  >
          <CustomPieChart />
        </Grid>
        <Grid item xs={9}>
          <Paper>
            <ExpenseTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </main>
  )
}

export default ExpenseContainer;
