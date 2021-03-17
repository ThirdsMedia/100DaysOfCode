import React from 'react';
import MainBar from '../Components/MainBar';
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
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <MainBar />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Get In Touch 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
            />
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              name="phone"
              label="Phone Number (optional)"
              id="phone"
            />
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              multiline
              rows='6'
              maxRows='10'
              name="message"    
              label="Message"
              id="message"
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

