import {combineReducers} from 'redux'
import expenseReducer from './expenseReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    expenses: expenseReducer,
    categories: categoryReducer
})

export default rootReducer
