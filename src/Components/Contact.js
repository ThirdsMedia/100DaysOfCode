import React, { useState } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useHistory } from 'react-router-dom';
import StartPageBar from '../Components/StartPageBar';
import Copyright from '../Components/Copyright';
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 37,
  },
  error: {
    color: theme.palette.secondary.main,
    fontFamily: 'Nunito',
    margin: theme.spacing(2),
  },
}));

export default function Contact() {
  const classes = useStyles();
  const auth = useFirebase();
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const onChangeInput = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    auth.sendContactEmail(formData)
      .then(() => {
        setFormData({});
        history.push(
          "/success",
          { message: "Thanks for contacting us! We will get back to you shortly." }
        )
        setError(null)
      })
      .catch((e) => {
        console.log(e.message)
        setError("Failed to submit form. Perhaps you forgot to fill in a required input?")
      })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <StartPageBar />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Get In Touch 
          </Typography>
          <form 
            className={classes.form} 
            noValidate
            onSubmit={onSubmitForm}
          >
            {
              error
                ? <Typography className={classes.error}>{error}</Typography>
                : false // navigate to the success page
            }
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={formData.name || ''}
              autoComplete="name"
              autoFocus
              onChange={(e) => onChangeInput(e)}
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              name="email"
              value={formData.email || ''}
              label="Email"
              id="email"
              onChange={(e) => onChangeInput(e)}
            />
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              name="phone"
              label="Phone Number (optional)"
              value={formData.phone || ''}
              id="phone"
              onChange={(e) => onChangeInput(e)}
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              multiline
              rows='6'
              maxrows='10'
              name="message"    
              value={formData.message || ''}
              label="Message"
              id="message"
              onChange={(e) => onChangeInput(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

