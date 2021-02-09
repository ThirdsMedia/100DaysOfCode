import React from 'react';
import Copyright from './Copyright';

/* Material UI Core */
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles'; // inline CSS API
import { lightGreen } from '@material-ui/core/colors';

// For general styling of regular elements such as <div> etc...
const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
  },
  textField: {
    padding: 10,
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
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container className={classes.main} component="main" maxWidth="sm">
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
        InputProps={{
          className: classes.textField
        }}
      />
      <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
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
        justify="space-around"
      >
        <Grid item>
          <Link href="#" variant="body4">
            Already have an account? Sign In
          </Link>
        </Grid>
      </Grid>
      <Copyright /> 
    </Container>
  );
}
