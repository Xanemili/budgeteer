import {ADD_EXPENSE, REMOVE_EXPENSE, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE} from './actions'

const expenseReducer = (state=[], action) => {
    const state_copy = [...state]
    switch (action.type){
        case ADD_EXPENSE:
            return
        case REMOVE_EXPENSE:
            return
        case LOAD_DATA_SUCCESS:
            let new_state = action.data.expenses
            return new_state;
        case LOAD_DATA_FAILURE:
            return state_copy;
        default:
            return state
    }
}

export default expenseReducer
