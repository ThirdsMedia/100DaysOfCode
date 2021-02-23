import React, { useState } from 'react';
import {
  Container,
  Avatar,
  IconButton,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Grid,
} from '@material-ui/core';
import ProfilePic from './assets/dj-pct.jpg';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
    backgroundColor: theme.palette.primary.background
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    height: theme.spacing(26),
    width: theme.spacing(26),
  },
  field: {
    marginBottom: 15
  },
  switch: {
    margin: 20
  },
  button: {
    borderRadius: 37
  },
}));

export default function EditProfile({ profileData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <IconButton>
          <Avatar className={classes.avatar} src={ProfilePic} />
        </IconButton>
      </Container>
      <Container>
        <FormControlLabel
          control={
            <Switch
              name="checkedB"
              color="secondary"
            />
          }
          label="Dark Theme"
          className={classes.switch}
        />
        <form className={classes.form}>
          <TextField 
            id="fname" 
            label="First Name"
            variant="outlined"
            defaultValue={profileData.fname} 
            className={classes.field}
            fullWidth
          />
          <TextField 
            id="lname" 
            label="Last Name"
            variant="outlined"
            defaultValue={profileData.lname} 
            className={classes.field}
            fullWidth
          />
          <TextField 
            id="bio" 
            label="Bio"
            variant="outlined"
            defaultValue={profileData.bio} 
            className={classes.field}
            fullWidth 
            multiline 
            rows={5}
          />
          <TextField 
            id="website" 
            label="Website"
            variant="outlined"
            defaultValue={profileData.url} 
            className={classes.field}
            fullWidth
          />
          <TextField 
            id="twitter"
            label="Twitter"
            variant="outlined"
            defaultValue={profileData.twitter} 
            className={classes.field}
            fullWidth
          />
        </form>
        <Grid container justify="center">
          <Grid item xs="2">
            <Button 
              color="primary" 
              variant="outlined"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Update Profile
            </Button>
          </Grid>
          <Grid item xs="2">
            <Button 
              color="secondary" 
              variant="outlined"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

