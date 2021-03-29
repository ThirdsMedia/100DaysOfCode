import React, { useState } from 'react';
import { useAuth } from '../FirebaseAuthProvider';
import {
  Container,
  Typography,
  TextField,
  IconButton,
  Button,
  Link,
  Grid,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  step: {
    marginTop: theme.spacing(6),
    textAlign: 'center'
  },
  textField: {
    borderRadius: 37,
  },
  submitButton: {
    color: 'white',
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  message: {
    fontFamily: 'Nunito',
  },
  error: {
    color: theme.palette.secondary.main,
    fontFamily: 'Nunito',
    margin: theme.spacing(2),
  },
}))

export default function ForgotPassword() {
  const classes = useStyles();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  const onResetPasswordHandler = () => {
    // perform lookup in database, if found then do these next two things..
    auth.sendPasswordResetEmail(email)
      .then(() => setError(`An email has been sent to ${email}`))
      .catch((e) => setError(e.message))
  }

  return (
    <main>
      <Container className={classes.step} maxWidth="sm">
        <Typography variant="subtitle2" color="textSecondary">
          Enter the email associated with your account
        </Typography>
        <TextField
          id="email"
          label="Email"
          margin="normal"
          required
          fullWidth
          variant="outlined"
          onInput={ e => setEmail(e.target.value)}
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
          onClick={onResetPasswordHandler}
        >
          Submit
        </Button>
      </Container>
      {
        error
          ? <Typography className={classes.error} align="center" variant="h6">
              {error} 
            </Typography>
          : false
      }
    </main>
  );
}
