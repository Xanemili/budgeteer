import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, LOAD_EXPENSES_SUCCESS, LOAD_EXPENSES_FAILURE } from './actions'

const expenseReducer = (state = {}, action) => {
  const state_copy = { ...state }
  switch (action.type) {
    case ADD_EXPENSE:
      if (state_copy[action.data.sort_name]) {
        state_copy[action.data.sort_name].push(action.data)
      } else {
        state_copy[action.data.sort_name] = [action.data]
      }
      return state_copy
    case REMOVE_EXPENSE:
      state_copy[action.data.category_name] = state_copy[action.data.category_name].filter(expense => expense.id !== action.data.id)
      return state_copy
    case EDIT_EXPENSE:
      state_copy[action.data.category_name] = state_copy[action.data.category_name].filter(expense => expense.id !== action.data.id)
      state_copy[action.data.category_name].push(action.data)
      return state_copy
    case LOAD_EXPENSES_SUCCESS:
      let copy_state = action.data
      let new_state = {}
      for (let expense of copy_state) {
        if(new_state[expense.category_name]){
          new_state[expense.category_name].push(expense);
        } else {
          new_state[expense.category_name] = [expense];
        }
      }
      return new_state;
    case LOAD_EXPENSES_FAILURE:
      return state_copy;
    default:
      return state
  }
}

export default expenseReducer
