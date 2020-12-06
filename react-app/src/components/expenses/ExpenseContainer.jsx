import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { loadData } from '../../store/reducers/actions';
import ExpenseCategory from './ExpenseCategory'

const ExpenseContainer = () => {

    const expenses = useSelector(state => state.expenses)
    const dispatch = useDispatch();



    useEffect(()=> {
        const route = 'expenses'
        try {
            dispatch(loadData(route))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            {Object.keys(expenses).map(key => <ExpenseCategory key={key} name={key} category={expenses[key]}/>)}
        </div>
    )
}

export default ExpenseContainer
