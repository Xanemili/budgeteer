import {combineReducers} from 'redux'
import expenseReducer from './expenseReducer'
import categoryReducer from './categoryReducer'
import tagsReducer from './tagsReducer'

const rootReducer = combineReducers({
    expenses: expenseReducer,
    categories: categoryReducer,
    tags: tagsReducer,
})

export default rootReducer
