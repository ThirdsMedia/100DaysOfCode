import React, { useState } from 'react';
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
}))

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPassword = (event, email, password) => {
    event.preventDefault();
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === "userEmail") {
      setEmail(name)
    } else if (name === "userPhone") {
      setPhone(name)
    } else if (name === "userPassword") {
      setPassword(name)
    } else if (name === "userName") {
      setUserName(name)
    }
  }

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Avatar>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5" color="textPrimary">
        Sign Up
      </Typography>
      <TextField
        id="name"
        label="Name"
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
        id="email"
        label="Email"
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
        id="phone"
        label="Phone Number (optional)"
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
        id="password"
        label="Password"
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
      >
        Create Account
      </Button>
      <Link href="/" variant="body4">
        Already have an account? Sign In
      </Link>
    </Container>
  );
}
