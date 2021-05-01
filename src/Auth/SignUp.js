import React, { useState } from 'react';
import Copyright from '../Components/Copyright';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useForm } from 'react-hook-form';
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
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
  error: {
    color: theme.palette.secondary.main,
    fontFamily: 'Nunito',
    margin: theme.spacing(2),
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
      <TextField
        label="Company Name"
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
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userData, setUserData] = useState({});
  const [signUpType, setSignUpType] = useState('business');
  const formProps = { register, errors, userData, setUserData };

  if (firebase.loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  const onSubmitForm = () => console.log(userData);

  return (
    <Container className={classes.root} maxWidth="sm">
      <Avatar>
        <LockOpenIcon color="secondary" />
      </Avatar>
      <Typography component="h1" variant="h5" color="textPrimary">
        Sign Up
      </Typography>
      <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
        {
          signUpType === 'business' ?
            <BusinessForm formProps={formProps} />
          : <UserForm formProps={formProps} />
        }
        <Button 
          className={classes.submitButton}
          type="submit"
          color="primary"
          fullWidth
        >
          Create Account
        </Button>
      </form>
      <Link href="/signin" variant="body2">
        Already have an account? Sign In
      </Link>
      <Copyright />
    </Container>
  );
}
