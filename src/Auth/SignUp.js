import React, { useState, useEffect } from 'react';
import Copyright from '../Components/Copyright';
import { useParams, useHistory } from 'react-router-dom';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  CircularProgress,
  Paper,
  Divider,
  FormControlLabel,
  Checkbox,
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
  jade: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  thirds: {
    color: theme.palette.secondary.main,
  },
  text: {
    fontFamily: 'Nunito',
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/pour.jpeg'})`,
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
  paragraph: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
  submitButton: {
    color: 'white',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
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
      <Divider />
      <Typography className={classes.paragraph}>
        Get started with JADE the one and only hospitality social media network. 
      </Typography>
      <TextField
        label="Name"
        {...register("name", { required: true })}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
      />
      {errors.name && <span className={classes.error}>This field is required</span>}
      <Grid container spacing={2}>
        <Grid item md>
          <TextField
            label="Email"
            {...register("email", { required: true })}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={(e) => onChangeInput(e)}
          />
          {errors.email && <span className={classes.error}>This field is required</span>}
        </Grid>
        <Grid item md>
          <TextField
            label="Phone Number (optional)"
            {...register("phone")}
            margin="normal"
            fullWidth
            type="tel"
            variant="outlined"
            onChange={(e) => onChangeInput(e)}
          />
        </Grid>
      </Grid>
      <TextField
        label="Password"
        {...register("password", { required: true })}
        margin="normal"
        type="password"
        variant="outlined"
        fullWidth
        onChange={(e) => onChangeInput(e)}
      />
      {errors.password && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Confirm Password"
        {...register("confirm", { required: true })}
        margin="normal"
        type="password"
        variant="outlined"
        fullWidth
        onChange={(e) => onChangeInput(e)}
      />
      {errors.password && <span className={classes.error}>This field is required</span>}
    </div>
  );
}

function BusinessForm({ formProps }) {
  const classes = useStyles();
  const { register, errors, userData, setUserData } = formProps;

  // Need to set the account type as well as isAdmin on the user object
  const onChangeInput = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <Divider />
      <Typography className={classes.paragraph}>
        Elevate your team and your brand to new heights with <span className={classes.thirds}>ThirdsMedia</span>. 
      </Typography>
      <Grid container spacing={2}>
        <Grid item md>
          <TextField
            label="Name"
            {...register("name", { required: true })}
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => onChangeInput(e)}
          />
          {errors.name && <span className={classes.error}>This field is required</span>}
        </Grid>
        <Grid item md>
          <TextField
            label="Company"
            {...register("company", { required: true })}
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => onChangeInput(e)}
          />
          {errors.company && <span className={classes.error}>This field is required</span>}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md>
          <TextField
            label="Email"
            {...register("email", { required: true })}
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => onChangeInput(e)}
          />
          {errors.email && <span className={classes.error}>This field is required</span>}
        </Grid>
        <Grid item md>
          <TextField
            label="Phone Number"
            {...register("phone", { required: true })}
            margin="normal"
            type="tel"
            variant="outlined"
            fullWidth
            onChange={(e) => onChangeInput(e)}
          />
        </Grid>
      </Grid>
      {errors.phone && <span className={classes.error}>This field is required</span>}
      <TextField
        label="Password"
        {...register("password", { required: true })}
        margin="normal"
        type="password"
        variant="outlined"
        fullWidth
        onChange={(e) => onChangeInput(e)}
      />
      <TextField
        label="Confirm Password"
        {...register("confirm", { required: true })}
        margin="normal"
        type="password"
        variant="outlined"
        fullWidth
        onChange={(e) => onChangeInput(e)}
      />
      {errors.password && <span className={classes.error}>This field is required</span>}
    </div>
  );
}

export default function SignUp() {
  const classes = useStyles();
  const { type } = useParams();
  const history = useHistory();
  const db = useFirebase();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const formProps = { register, errors, userData, setUserData };

  useEffect(() => {
    if (db.user) {
      history.push("/");
    }
  });

  const handleUserCreation = (email, password, isAdmin) => {
    if (!db.isPasswordIdentical(userData.password, userData.confirm)) {
      setError("Passwords do not match");
      return
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const submitProps = { ...userData, type }
        db.addUserToFirestore(response.user.uid, submitProps, isAdmin);
        db.setCurrentUser(response.user);
      })
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
          history.push("/");
        })
      })
      .catch((e) => setError(e.message));
  }

  const onSubmitForm = () => {
    if (type === "Business") {
      handleUserCreation(userData.email, userData.password, true);
    } else {
      handleUserCreation(userData.email, userData.password, false);
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography className={classes.text} component="h1" variant="h4">
            Join the <span className={classes.jade}>JADE</span> family
          </Typography>
          {
            error
              ? <Typography className={classes.error}>{error}</Typography>
              : false
          }
          <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
            {
              type === 'Business' ?
                <BusinessForm formProps={formProps} />
              : type === 'Mixologist' || type === 'Customer' ? 
                  <UserForm formProps={formProps} />
                : false
            }
            <FormControlLabel
              control={<Checkbox color="secondary" id="terms" />}
              label="I agree to the Terms & Conditions"
            />
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
          <Link href="/signin">Already have an account? Sign In</Link>
          <Copyright />
        </div>
      </Grid>
    </Grid>
  );
}

