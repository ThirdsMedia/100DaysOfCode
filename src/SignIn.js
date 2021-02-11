import React from 'react';
import Copyright from './Copyright';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
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
}))

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Avatar />
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
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
      <Grid container>
        <FormControlLabel
          control={<Checkbox color="secondary" id="remember" size="small" />}
          label="Remember Me"
        />
      </Grid>
      <Button 
        className={classes.submitButton}
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
      >
        Sign In
      </Button>
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
      <Copyright />
    </Container>
  );
}
