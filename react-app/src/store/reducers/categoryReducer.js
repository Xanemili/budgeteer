import {ADD_CATEGORY, REMOVE_CATEGORY, LOAD_CATEGORIES_FAILURE, LOAD_CATEGORIES_SUCCESS} from './actions'

const categoryReducer = (state=[], action) => {
    const state_copy = [...state]
    switch (action.type) {
        case ADD_CATEGORY:
            return state_copy
        case REMOVE_CATEGORY:
            return state_copy
        case LOAD_CATEGORIES_SUCCESS:
            let new_state = action.data
            return new_state;
        case LOAD_CATEGORIES_FAILURE:
            return state_copy;
        default:
            return state
    }
}

export default categoryReducer;
