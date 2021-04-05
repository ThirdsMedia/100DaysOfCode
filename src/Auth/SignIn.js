import React, { useState } from 'react';
import Copyright from '../Components/Copyright';
import { useAuth } from '../FirebaseAuthProvider';
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
  },
  textField: {
    borderRadius: 37,
  },
  submitButton: {
    color: 'white',
    margin: theme.spacing(2),
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: 50,
  },
  logo: {
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  error: {
    color: theme.palette.secondary.main,
    fontFamily: 'Nunito',
    margin: theme.spacing(2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(auth.error);

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  }

  if (auth.loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Avatar color="primary">
        <LockOpenIcon color="secondary"/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      {
        error
          ? <Typography className={classes.error}>{error}</Typography>
          : false
      }

      <TextField
        id="email"
        name="userEmail"
        label="Email"
        margin="normal"
        value={email}
        required
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeHandler(e)}
        InputProps={{
          className: classes.textField
        }}
      />
      <TextField
        id="password"
        name="userPassword"
        label="Password"
        value={password}
        margin="normal"
        type="password"
        required
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeHandler(e)}
        InputProps={{
          className: classes.textField
        }}
      />
      <Grid container>
        <FormControlLabel
          control={<Checkbox color="secondary" id="remember" size="small" />}
          label="Remember Me"
        />
      </Grid>
      <Button 
        className={classes.submitButton}
        type="submit"
        name="reg"
        color="primary"
        fullWidth
        variant="contained"
        onClick={() => auth.signin(email, password)}
      >
        Sign In
      </Button>
      <Button 
        className={classes.submitButton}
        type="submit"
        name="goog"
        color="secondary"
        fullWidth
        variant="contained"
        onClick={() => {
          auth.signInWithGoogle().catch((e) => {
            setError(e.message)
          })
        }}
      >
        Sign in with Google
      </Button>
      <Grid 
        container
        justify="space-around"
      >
        <Grid item>
          <Link href="/forgotpassword" variant="body4">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/signup" variant="body4">
            Sign Up
          </Link>
        </Grid>
      </Grid>
      <Copyright />
    </Container>
  );
}
