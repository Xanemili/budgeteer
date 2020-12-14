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
        <ToolBar className='navbar-container'>
          
          <div className='navbar-container__navigation'>
            <NavLink to="/" exact activeClassName="active" className='navbar__link'>
              <Typography variant="h5" >
                Budgeteer
              </Typography>
            </NavLink>
        
            <NavLink to="/expenses" exact activeClassName="active" className='navbar__link'>
              Expenses
            </NavLink>
            <NavLink to="/calculators" exact activeClassName="active" className='navbar__link'>
              Calculators
            </NavLink>
            <CategoryModal />
          </div>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </ToolBar> :
        <ToolBar>
          <NavLink to="/" exact activeClassName="active" className='navbar__link'>
            <Typography>
              Budgeteer
            </Typography>
          </NavLink>
          <NavLink to="/login" exact activeClassName="active" className='navbar__link'>
            Login
          </NavLink>
          <NavLink to="/sign-up" exact activeClassName="active" className='navbar__link'>
            Sign Up
          </NavLink>
        </ToolBar>}
    </AppBar>
  );
}

export default NavBar;
