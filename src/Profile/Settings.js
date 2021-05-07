import React, { useState } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import MainBar from '../Navigation/MainBar';
import UserAvatar from './UserAvatar';
import { 
  Container,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: 15,
    backgroundColor: theme.palette.primary.background
  },
  container: {
    padding: theme.spacing(3),
  },
  button: {
    borderRadius: 37
  },
}));

export default function Settings() {
  const classes = useStyles(); 
  const firebase = useFirebase();
  const [userData, setUserData] = useState({...firebase.user});

  const onChangeInput = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  const onSubmitHandler = () => {
    firebase.updateUser(userData)
      .then(() => console.log("Successfully updated the user's data"))
      .catch((e) => console.log(e.message))
      .finally(() => window.location.reload(true))
  }

  return (
    <div>
      <MainBar />
      <Container className={classes.container}>
        <UserAvatar />
        <form>
          <TextField 
            id="displayName"
            name="displayName"
            label="Name"
            variant="outlined"
            defaultValue={userData.name}
            className={classes.field}
            fullWidth
            onChange={(e) => onChangeInput(e)}
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
            onChange={(e) => onChangeInput(e)}
          />
          <TextField 
            id="website" 
            name="website"
            label="Website"
            variant="outlined"
            defaultValue={userData.social.website}
            className={classes.field}
            fullWidth
            onChange={(e) => onChangeInput(e)}
          />
          <TextField 
            id="twitter"
            name="twitter"
            label="Twitter"
            variant="outlined"
            defaultValue={userData.social.twitter}
            className={classes.field}
            fullWidth
            onChange={(e) => onChangeInput(e)}
          />
          <TextField 
            id="instagram"
            name="instagram"
            label="Instagram"
            variant="outlined"
            defaultValue={userData.social.instagram}
            className={classes.field}
            fullWidth
            onChange={(e) => onChangeInput(e)}
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
              href="/profile"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
