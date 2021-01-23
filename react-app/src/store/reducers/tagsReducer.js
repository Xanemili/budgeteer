import {ADD_TAG, REMOVE_TAG, EDIT_TAG, LOAD_TAGS_FAILURE, LOAD_TAGS_SUCCESS} from './actions'

const tagsReducer = (state=[], action) => {
  const state_copy = [...state]
  switch (action.type) {
    case ADD_TAG:
      console.log(state_copy)
      state_copy.push(action.data)
      return state_copy
    case EDIT_TAG:
      const tag_idx = state_copy.findIndex(tag => {
        return tag.id === action.data.id
      })
      state_copy[tag_idx] = action.data
      return state_copy;
    case REMOVE_TAG:
      const new_state = state_copy.filter(tag => tag.id !== action.data.id)
      return new_state;
    case LOAD_TAGS_SUCCESS:
      return action.data;
    case LOAD_TAGS_FAILURE:
      return state_copy;
    default:
      return state;
  }
}

export default tagsReducer
