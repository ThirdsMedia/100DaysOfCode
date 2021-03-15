import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
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
}))

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="main" maxWidth="sm">
      <Typography component="h1" variant="h5">
        Find your account
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Enter the email associated with your account.
      </Typography>
      <TextField
        id="email"
        label="Email"
        margin="normal"
        required
        fullWidth
        variant="outlined"
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
        href="/"
      >
        Search
      </Button>
    </Container>
  );
}
