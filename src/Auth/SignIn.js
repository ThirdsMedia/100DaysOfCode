import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../Providers/FirebaseProvider';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/jade8.jpg'})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    border: '1px solid grey',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.background,
  },
  colorText: {
    color: theme.palette.primary.main,
  },
  submitButton: {
    color: 'white',
    margin: theme.spacing(1),
    textTransform: 'none',
    fontWeight: 'bold',
  },
  googButton: {
    margin: theme.spacing(1),
    textTransform: 'none',
    fontWeight: 'bold',
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
  const db = useFirebase();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (db.user) {
      history.push("/");
    }
  });

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  }

  const onSignInHandler = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        db.setCurrentUser(response.user);
      })
      .catch((e) => setError(e.message))
  }

  return (
    <div className={classes.root}>
    <Container className={classes.paper} component="main" maxWidth="xs">
      <Typography style={{fontFamily: 'Nunito'}} component="h1" variant="h5">
        Log in to <span className={classes.colorText}>JADE</span>
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
          onClick={onSignInHandler}
        >
          Sign In
        </Button>
      <Grid container justify="space-around">
        <Grid item>
          <Link href="/forgotpassword" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/" variant="body2">
            Sign Up
          </Link>
        </Grid>
      </Grid>
      <Typography style={{color: '#d0d0d0'}}>Or</Typography>
      <Button 
        className={classes.googButton}
        type="submit"
        name="goog"
        color="secondary"
        fullWidth
        variant="outlined"
        onClick={() => {
          firebase.signInWithGoogle().catch((e) => {
            setError(e.message)
          })
        }}
      >
        Sign in with Google
      </Button>

    </Container>
    </div>
  );
}
