import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const ExpenseCategory = ({ name, category }) => {

  const expenseCreator = (item) => {
    return (
      <ListItem>
        <ListItemText primary={item.id} />
      </ListItem>
    )
  }

  return (
      <List
        subheader={
        <ListSubheader component="div" id={name}>
          {name}
          {console.log(name)}
        </ListSubheader>
        }
      >
        {category.map(expense => expenseCreator(expense))}
      </List>
  )
}

export default ExpenseCategory;
