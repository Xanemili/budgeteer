export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS'
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const LOAD_EXPENSES_SUCCESS = 'LOAD_EXPENSES_SUCCESS'
export const LOAD_EXPENSES_FAILURE = 'LOAD_EXPENSES_FAILURE'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const EDIT_EXPENSE = 'EDIT_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

export const loadExpenses = () => async dispatch => {
  const response = await fetch(`/api/expenses/`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_EXPENSES_SUCCESS,
      data: data.expenses
    })
  } else {
    dispatch({
      type: LOAD_EXPENSES_FAILURE
    })
  }
}

export const editExpense = (expenseId) => async dispatch => {
  const response = await fetch(`/api/expenses/${expenseId}`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: EDIT_EXPENSE,
      data: data.expense
    })
  }
}

export const deleteExpense = (expenseId) => async dispatch => {
  const response = await fetch(`/api/expenses/${expenseId}`, {
    method: 'DELETE'
  })
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: REMOVE_EXPENSE,
      data: data.expense
    })
  }
}

export const loadCategories = () => async dispatch => {
  const response = await fetch(`/api/categories/`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_CATEGORIES_SUCCESS,
      data: data.categories
    })
  } else {
    dispatch({
      type: LOAD_CATEGORIES_FAILURE
    })
  }
}
