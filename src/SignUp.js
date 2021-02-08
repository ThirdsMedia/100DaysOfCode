import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles, makeStyles } from '@material-ui/core/styles'; // inline CSS API
import { pink, lightGreen } from '@material-ui/core/colors';

// Custom button
const SubmitButton = withStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    }
  },
}))(Button)

// For general styling of regular elements such as <div> etc...
const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  textField: {
    padding: 10,
    borderRadius: 15,
    borderColor: 'white',
  },
}));

function Copyright() {
  return (
        <Link href="https://thirdsmedia.com" color="primary" variant="body2">
          ThirdsMedia
        </Link>
  );
}

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.page}>
        <TextField
          id="name"
          label="Name"
          margin="normal"
          variant="outlined"
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
          variant="outlined"
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
          variant="outlined"
          type="password"
          required
          fullWidth
          InputProps={{
            className: classes.textField
          }}
        />
        <SubmitButton 
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
        >
          Create Account
        </SubmitButton>
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
      </div>
    </Container>
  );
}
