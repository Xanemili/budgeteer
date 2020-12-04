import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';


const NavBar = ({ setAuthenticated }) => {
  return (
      <AppBar position={"static"}>
        <ToolBar>
          <NavLink to="/login" exact activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact activeClassName="active">
            Sign Up
          </NavLink>
          <NavLink to="/users" exact activeClassName="active">
            Users
          </NavLink>
        <LogoutButton setAuthenticated={setAuthenticated} />
        </ToolBar>
      </AppBar>
  );
}

export default NavBar;
