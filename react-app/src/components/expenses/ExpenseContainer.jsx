import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { loadExpenses, loadCategories } from '../../store/reducers/actions';
import ExpenseTable from './ExpenseTable';
import CustomPieChart from '../charts/PieChart'

const ExpenseContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(loadExpenses())
      dispatch(loadCategories())
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <div>
      <CustomPieChart />
      <ExpenseTable />
    </div>
  )
}

export default ExpenseContainer;
