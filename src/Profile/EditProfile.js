import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
  },
  field: {
    marginBottom: 15,
    backgroundColor: theme.palette.primary.background
  },
  button: {
    borderRadius: 37
  },
}));

export default function EditProfile({ auth, userData, imageRef}) {
  const classes = useStyles(); 
  const [userObject, setUserObject] = useState(userData);  
  const [error, setError] = useState(auth.error);

  const onChangeName = (event) => {
    setUserObject(Object.assign({}, userData, {displayName: event.target.value}))
  }

  const onChangeBio = (event) => {
    setUserObject(Object.assign({}, userData, {bio: event.target.value}))
  }

  const onChangeTwitter = (event) => {
    setUserObject(Object.assign({}, userData, {twitter: event.target.value}))
  }

  const onChangeWebsite = (event) => {
    setUserObject(Object.assign({}, userData, {website: event.target.value}))
  }

  const onChangeInstagram = (event) => {
    setUserObject(Object.assign({}, userData, {instagram: event.target.value}))
  }

  const onSubmitHandler = () => {
    auth.updateUser(userObject)
      .then(() => console.log("userData: ", userData, "userObject: ", userObject))
      .catch((e) => setError(e.message))
      .finally(() => {})//window.location.reload(true))
  }

  return (
    <div className={classes.form}>
      <form>
        <TextField 
          id="displayName"
          name="displayName"
          label="Name"
          variant="outlined"
          defaultValue={userData.displayName}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeName(e)}
        />
        <TextField 
          id="bio" 
          name="bio"
          label="Bio"
          variant="outlined"
          defaultValue={userData.bio}
          className={classes.field}
          fullWidth 
          multiline 
          rows={5}
          onChange={(e) => onChangeBio(e)}
        />
        <TextField 
          id="website" 
          name="website"
          label="Website"
          variant="outlined"
          defaultValue={userData.website}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeWebsite(e)}
        />
        <TextField 
          id="twitter"
          name="twitter"
          label="Twitter"
          variant="outlined"
          defaultValue={userData.twitter}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeTwitter(e)}
        />
        <TextField 
          id="instagram"
          name="instagram"
          label="Instagram"
          variant="outlined"
          defaultValue={userData.instagram}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInstagram(e)}
        />
      </form>
      <Grid container justify="center">
        <Grid item xs={2}>
          <Button 
            color="primary" 
            variant="outlined"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={onSubmitHandler}
          >
            Update Profile
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button 
            color="secondary" 
            variant="outlined"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => window.location.reload(true)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
