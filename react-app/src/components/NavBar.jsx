import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import CategoryModal from './modals/CategoryModal'


const NavBar = ({authenticated, setAuthenticated }) => {

  return (
    <AppBar position={"sticky"}>
      {authenticated ?
        <ToolBar>
          <NavLink to="/" exact activeClassName="active">
            <Typography variant="h5">
              Budgeteer
            </Typography>
          </NavLink>
          <NavLink to="/expenses" exact activeClassName="active">
            Expenses
          </NavLink>
          <NavLink to="/calculators" exact activeClassName="active">
            Calculators
          </NavLink>
          <NavLink to="/users" exact activeClassName="active">
            Users
          </NavLink>
          <CategoryModal />
          <LogoutButton setAuthenticated={setAuthenticated} />
        </ToolBar> :
        <ToolBar>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/login" exact activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact activeClassName="active">
            Sign Up
          </NavLink>
        </ToolBar>}
    </AppBar>
  );
}

export default NavBar;
