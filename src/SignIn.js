import React from 'react';

/* 
 * You can find all of these components here: https://material-ui.com/getting-started/installation/
 * Then go to the side tab to Components or Components API and find all the components you could ever need there.
 */

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
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
  },
  textField: {
    padding: 10,
  },
}));

function Copyright() {
  return (
    <Grid 
      container
      color="inherit"
    >
      <Grid item>
        Empowered by
      </Grid>
      <Grid item>
        <Link href="https://thirdsmedia.com" color="primary" variant="body2">
          ThirdsMedia
        </Link>
      </Grid>
      <Grid item>
        @2021
      </Grid>
    </Grid>
  );
}

export default function SignIn() {
  const classes = useStyles();

  /*
   * So you should wrap whatever form in a Container and set the maxWidth
   * The maxWidth property's usefulness doesn't become apparent until you use the fullWidth property on child components
   */

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.page}>
        <TextField
          id="email"
          label="email"
          margin="normal"
          required
          fullWidth
          InputProps={{
            className: classes.textField
          }}
        />
        <TextField
          id="password"
          label="password"
          margin="normal"
          type="password"
          required
          fullWidth
          InputProps={{
            className: classes.textField
          }}
        />
        <Grid container>
          <FormControlLabel
            control={<Checkbox color="primary" id="remember" size="small" />}
            label="Remember Me"
          />
        </Grid>
        <SubmitButton 
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
        >
          Sign In
        </SubmitButton>
        <Grid 
          container
          justify="space-around"
        >
          <Grid item>
            <Link href="#" variant="body4">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body4">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
