import React, { useState } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import MainBar from '../Navigation/MainBar';
import { 
  Avatar,
  IconButton,
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
    textAlign: 'center',
  },
  button: {
    borderRadius: 37
  },
  avatar: {
    textAlign: 'center', 
    marginBottom: theme.spacing(3),
  },
  profilePic: {
    height: theme.spacing(26),
    width: theme.spacing(26),
    cursor: "pointer",
  },
}));

export default function Settings() {
  const classes = useStyles(); 
  const firebase = useFirebase();
  const [userData, setUserData] = useState({...firebase.user});
  const [image, setImage] = useState(firebase.user.picture);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
    const imageFile = URL.createObjectURL(event.target.files[0]);
    setImage(imageFile);
  }

  const onChangeInput = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  }

// Yep, just add all the stuff in onUploadImage into here too
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (file) {
      if (file.size > 2097152) {
        setError("This file is too large");
      } else {
        firebase.uploadImageToStorage(file).then((url) => {
          firebase.updateUser({...userData, picture: url})
        })
        .catch((e) => setError(e.message))
      }
    } else {
      firebase.updateUser(userData);
    }
  }

  return (
    <div>
      <MainBar />
      <form className={classes.container} onSubmit={onSubmitHandler}>
        <input 
          accept="image/*" 
          hidden 
          id="photo-upload" 
          type="file" 
          onChange={(e) => handleImageChange(e)} 
        />
        <label htmlFor="photo-upload">
          <IconButton component="span">
            <Avatar 
              className={classes.profilePic} 
              src={image}
            />
          </IconButton>
          {error ? <span>{error}</span> : false}
        </label>
        <TextField 
          name="name"
          label="Name"
          variant="outlined"
          defaultValue={userData.name}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
        />
        <TextField 
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
          name="website"
          label="Website"
          variant="outlined"
          defaultValue={userData.website}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
        />
        <TextField 
          name="twitter"
          label="Twitter"
          variant="outlined"
          defaultValue={userData.twitter}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
        />
        <TextField 
          name="instagram"
          label="Instagram"
          variant="outlined"
          defaultValue={userData.instagram}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
        />
        <Grid container justify="center">
          <Grid item xs={2}>
            <Button 
              color="primary" 
              variant="outlined"
              type="submit"
              className={classes.button}
              startIcon={<SaveIcon />}
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
        </form>
    </div>
  );
}
