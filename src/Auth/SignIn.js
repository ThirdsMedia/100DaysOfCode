import React from 'react';
import Copyright from '../Components/Copyright';
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Checkbox 
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
    logo: {
      height: theme.spacing(10),
      width: theme.spacing(10),
    },
  },
}))

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Avatar>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
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
      <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
        required
        fullWidth
        variant="outlined"
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
        href="/"
      >
        Sign In
      </Button>
      <Grid 
        container
        justify="space-around"
      >
        <Grid item>
          <Link href="/forgotpassword" variant="body4">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/signup" variant="body4">
            Sign Up
          </Link>
        </Grid>
      </Grid>
      <Copyright />
    </Container>
  );
}
