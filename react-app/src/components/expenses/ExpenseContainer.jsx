import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { loadExpenses, loadCategories } from '../../store/reducers/actions';
import ExpenseTable from './ExpenseTable';
import CustomPieChart from '../charts/PieChart'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
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
  fixedHeight: {
    height: 240,
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
      <div className={classes.appBarSpacer}/>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}  >
            <Paper className='expenses__piechart'>
              <CustomPieChart />
            </Paper>
          </Grid>
          <Grid item xs={12}>
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
