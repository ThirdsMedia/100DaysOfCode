import React from 'react';
import Copyright from '../Helpers/Copyright';

/* Material UI Core */
import {
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

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
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
  },
}))

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Avatar />
      <Typography component="h1" variant="h5" color="textPrimary">
        Sign Up
      </Typography>
      <TextField
        id="name"
        label="Name"
        margin="normal"
        required
        fullWidth
        variant="outlined"
        InputProps={{
          className: classes.textField
        }}
      />
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
      <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
        variant="outlined"
        required
        fullWidth
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
      <Grid 
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
           <FormControlLabel
            control={<Checkbox color="secondary" id="remember" size="small" />}
            label="Receive notifications via text"
          />
        </Grid>
        <Grid item>
          <Link href="/signin" variant="body4">
            Already have an account? Sign In
          </Link>
        </Grid>
      </Grid>
      <Copyright /> 
    </Container>
  );
}
