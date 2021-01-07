import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTag} from '../../store/reducers/actions'
import IconButton from '@material-ui/core/IconButton'
import AddBox from '@material-ui/icons/AddBox'
import Cancel from '@material-ui/icons/Cancel'

const TagList = ({tags, id}) => {

  const [openAddTag, setOpenAddTag] = useState(false)
  const [newTag, setNewTag] = useState('')

  const dispatch = useDispatch()

  return (
    <>
      { openAddTag ? 
        <div>
          <input value={newTag} onChange={(e)=> setNewTag(e.target.value)}></input>
          <IconButton aria-label='add-tag' onClick={() => dispatch(addTag({expense_id: id, name: newTag}))}>
            <AddBox />
          </IconButton>
          <IconButton aria-label='close-input' onClick={() => setOpenAddTag(false)}>
            <Cancel />
          </IconButton>
        </div> :
        <div>
        {!tags ? null : tags.map( tag => <div className='expense__tag'>{tag.name}</div>)} 
        <IconButton aria-label='add tag' onClick={() => setOpenAddTag(true)}>
          <AddBox fontSize='small' />
        </IconButton> 
        </div> 
        }
      </>
  )

}

export default TagList