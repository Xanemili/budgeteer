export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS'
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const LOAD_EXPENSES_SUCCESS = 'LOAD_EXPENSES_SUCCESS'
export const LOAD_EXPENSES_FAILURE = 'LOAD_EXPENSES_FAILURE'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const EDIT_EXPENSE = 'EDIT_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

export const LOAD_TAGS_SUCCESS = 'LOAD_TAGS_SUCCESS'
export const LOAD_TAGS_FAILURE = 'LOAD_TAGS_FAILURE'
export const ADD_TAG = 'ADD_TAG'
export const EDIT_TAG = 'EDIT_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'

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

export const loadTags = () => async dispatch => {
  const response = await fetch(`/api/tags/`)
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: LOAD_TAGS_SUCCESS,
      data: data.tags
    })
  }
}

export const addTag = (body) => async dispatch => {
  const response = await fetch(`/api/tags/create`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: ADD_TAG,
      data: data.tags
    })
  }
}

export const editTag = (body, id) => async dispatch => {
  const response = await fetch(`/api/tags/${id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: EDIT_TAG,
      data: data.tag
    })
  }
}

export const deleteTag = (id) => async dispatch => {
  const response = await fetch(`/api/tags/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  })
  if (response.ok) {
    const data = await response.json();
    dispatch({
      type: REMOVE_TAG,
      data: data.tag
    })
  }
}
