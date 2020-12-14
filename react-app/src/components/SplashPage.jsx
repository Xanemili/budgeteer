import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

const SplashPage = ({authenticated}) => {

  if (authenticated) {
    return <Redirect to='/expenses' />
  }

  return (
    <div className='bg splash-layout'>
      <Typography>
        Track spending better with Budgeteer! 
      </Typography>
      <Button>
        Sign Up
      </Button>
    </div>
  )
}

export default SplashPage
