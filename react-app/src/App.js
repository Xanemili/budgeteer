import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavTab from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/user/UsersList";
import User from "./components/user/User";
import LoanContainer from './components/loan/LoanContainer'
import ExpenseContainer from "./components/expenses/ExpenseContainer"
import SplashPage from './components/SplashPage'
import { authenticate } from "./services/auth";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <NavTab authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Route path="/login" exact>
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route path="/calculators" exact={true}>
        <LoanContainer authenticated={authenticated}/>
      </Route>
      <Route path="/landing">
        <SplashPage authenticated={authenticated}/>
      </Route>
      <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
        <UsersList/>
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute>
      <ProtectedRoute path="/expenses" exact={true} authenticated={authenticated}>
        <ExpenseContainer />
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
