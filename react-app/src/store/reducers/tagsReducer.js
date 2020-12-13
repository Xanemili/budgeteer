import {ADD_TAG, REMOVE_TAG, EDIT_TAG, LOAD_TAGS_FAILURE, LOAD_TAGS_SUCCESS} from './actions'

const tagsReducer = (state=[], action) => {
  const state_copy = [...state]
  switch (action.type) {
    case ADD_TAG:
      state_copy.push(action.data)
      return state_copy
    case EDIT_TAG:
      const tag_idx = state_copy.findIndex(tag => {
        console.log(tag, action.data)
        return tag.id === action.data.id
      })
      state_copy[tag_idx] = action.data
      return state_copy;
    case REMOVE_TAG:
      const new_state = state_copy.filter(tag => tag.id !== action.data.id)
      return new_state;
    case LOAD_TAGS_SUCCESS:
      console.log(action.data)
      return action.data;
    default:
      return state;
  }
}

export default tagsReducer
