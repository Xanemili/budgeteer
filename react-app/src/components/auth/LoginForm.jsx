import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/expenses" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
            <TextField
              name="email"
              id="email"
              type="text"
              placeholder="Email"
              label="Email Address"
              value={email}
              onChange={updateEmail}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              name="password"
              id="email"
              type="password"
              placeholder="Password"
              label="Password"
              value={password}
              onChange={updatePassword}
              required
              fullWidth
              variant="outlined"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
            <Grid container justify='center'>
              <Grid item>
                <NavLink to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
                <Button color='primary' onClick={() => {
                  setEmail('demo@aa.io')
                  setPassword('password')
                }}>
                  Demo User
                </Button>
              </Grid>
            </Grid>
        </form>
      </div>

    </Container>
  );
};

export default LoginForm;
