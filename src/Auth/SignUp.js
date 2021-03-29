import React, { useState } from 'react';
import { useAuth } from '../FirebaseAuthProvider';
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
  Link 
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
    margin: theme.spacing(5),
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
    },
  },
  error: {
    color: theme.palette.secondary.main,
    fontFamily: 'Nunito',
    margin: theme.spacing(2),
  },
}))

export default function SignUp() {
  const classes = useStyles();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === 'signup-userEmail') {
      setEmail(value)
    } else if (name === 'signup-userPhone') {
      setPhone(value)
    } else if (name === 'signup-userPassword') {
      setPassword(value)
    } else if (name === 'signup-userName') {
      setUserName(value)
    }
  }

  const checkPasswordHandler = () => {
    if (password < 8) {
      setError("Password must be at least 8 characters")
    }// else {
//      auth.signup(email, password).catch((e) => {
 //       setError(e.message)
  //    })
    //}
  }

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Avatar>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5" color="textPrimary">
        Sign Up
      </Typography>
      {
        error
          ? <Typography className={classes.error}>{error}</Typography>
          : false
      }
      <TextField
        id="signup-name"
        label="Name"
        name="signup-userName"
        value={userName}
        margin="normal"
        required
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeHandler(e)}
        InputProps={{
          className: classes.textField
        }}
      />
      <TextField
        id="signup-email"
        label="Email"
        name="signup-userEmail"
        value={email}
        margin="normal"
        required
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeHandler(e)}
        InputProps={{
          className: classes.textField
        }}
      />
      <TextField
        id="signup-phone"
        label="Phone Number (optional)"
        name="signup-userPhone"
        value={phone}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeHandler(e)}
        InputProps={{
          className: classes.textField
        }}
      />
      <TextField
        id="signup-password"
        label="Password"
        name="signup-userPassword"
        value={password}
        margin="normal"
        type="password"
        variant="outlined"
        required
        fullWidth
        onChange={(e) => onChangeHandler(e)}
        InputProps={{
          className: classes.textField
        }}
      />
      <Button 
        className={classes.submitButton}
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        onClick={() => {
          auth.signup(email, password).catch((e) => {
            setError(e.message);
          })
        }}
      >
        Create Account
      </Button>
      <Link href="/" variant="body4">
        Already have an account? Sign In
      </Link>
    </Container>
  );
}
