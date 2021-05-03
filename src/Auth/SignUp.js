import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Copyright from '../Components/Copyright';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useForm } from 'react-hook-form';
import {
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  CircularProgress,
  Paper,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/polynesiancocktail.webp'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  error: {
    color: theme.palette.secondary.main,
    fontFamily: 'Nunito',
    margin: theme.spacing(2),
  },
  textField: {
    borderRadius: 37,
  },
  submitButton: {
    color: 'white',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
    },
  },
}))

function UserForm({ formProps }) {
  const classes = useStyles();
  const { register, errors, userData, setUserData } = formProps;

  const onChangeInput = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <TextField
        label="Name"
        {...register("name", { required: true })}
        value={userData.name}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.name && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Email"
        {...register("email", { required: true })}
        value={userData.email}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.email && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Phone Number (optional)"
        {...register("phone")}
        value={userData.phone}
        margin="normal"
        fullWidth
        type="tel"
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      <TextField
        label="Password"
        {...register("password", { required: true })}
        value={userData.password}
        margin="normal"
        type="password"
        variant="outlined"
        fullWidth
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.password && <span className={classes.error}>This field is required</span>}
    </div>
  );
}

function BusinessForm({ formProps }) {
  const classes = useStyles();
  const { register, errors, userData, setUserData } = formProps;

  const onChangeInput = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            label="Name"
            {...register("name", { required: true })}
            value={userData.name}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeInput(e)}
            InputProps={{className: classes.textField}}
          />
          {errors.name && <span className={classes.error}>This field is required</span>}
        </Grid>
        <Grid item xs>
          <TextField
            label="Company"
            {...register("company", { required: true })}
            value={userData.company}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeInput(e)}
            InputProps={{className: classes.textField}}
          />
          {errors.company && <span className={classes.error}>This field is required</span>}
        </Grid>
      </Grid>
      <TextField
        label="Email"
        {...register("email", { required: true })}
        value={userData.email}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.email && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Phone Number"
        {...register("phone", { required: true })}
        value={userData.phone}
        margin="normal"
        fullWidth
        type="tel"
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.phone && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Address"
        {...register("address", { required: true })}
        value={userData.address}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.address && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Password"
        {...register("password", { required: true })}
        value={userData.password}
        margin="normal"
        type="password"
        variant="outlined"
        fullWidth
        onChange={(e) => onChangeInput(e)}
        InputProps={{className: classes.textField}}
      />
      {errors.password && <span className={classes.error}>This field is required</span>}
    </div>
  );
}

export default function SignUp() {
  const classes = useStyles();
  const firebase = useFirebase();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userData, setUserData] = useState({});
  const formProps = { register, errors, userData, setUserData };

  if (firebase.loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  const onSubmitForm = () => {
    console.log(userData)
    firebase.signup(userData);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up for Jade
          </Typography>
          <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
            {
              location.formType === '/business' ?
                <BusinessForm formProps={formProps} />
              : <UserForm formProps={formProps} />
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Submit
            </Button>
          </form>
          <Link href="/signin" variant="body2">
            Already have an account? Sign In
          </Link>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

