import React from "react";
import { logout } from "../../services/auth";
import Button from '@material-ui/core/Button'

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return(
    <Button onClick={onLogout} size='small'>
      Logout
    </Button> 
  ) 
};

export default LogoutButton;
