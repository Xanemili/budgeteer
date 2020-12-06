import {combineReducers} from 'redux'
import expenseReducer from './expenseReducer'

const rootReducer = combineReducers({
    expenses: expenseReducer
})

export default rootReducer
