import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import {useDispatch, useSelector} from 'react-redux'
import {addTag, editTag, deleteTag, loadTags} from '../../store/reducers/actions'

const CreateTag = () => {
  const dispatch = useDispatch()
  const tags = useSelector(state => state.tags)

  useEffect(() => {
    try {
      dispatch(loadTags())
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <div>
      <Button onClick={() => dispatch(addTag({name: 'new tag'}))}>
        ADD TAG
      </Button>
      <Button onClick={() => dispatch(editTag({ name: 'changed tag' }, 2))}>
        EDIT TAG
      </Button>
      <Button onClick={() => dispatch(deleteTag(2))}>
        DELETE TAG
      </Button>
    </div>
  )
}

export default CreateTag
