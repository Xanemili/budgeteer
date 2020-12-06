export const ADD_CATEGORY = 'ADD_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS'
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

export const loadData = (route) => async dispatch => {
    const response = await fetch(`/api/${route}`)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        dispatch({type: LOAD_DATA_SUCCESS, data})
    } else {
        dispatch({type: LOAD_DATA_FAILURE})
    }
}
