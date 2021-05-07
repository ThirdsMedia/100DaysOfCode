import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import {
  IconButton,
  Avatar,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

export default function UserAvatar() {
  const classes = useStyles();
  const firebase = useFirebase();
  const [image, setImage] = useState(firebase.user.picture);
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
    const imageFile = URL.createObjectURL(event.target.files[0]);
    setImage(imageFile);
  }

  // Success... ish. This works, but it feels gross and dirty. 
  const onUploadImage = (event) => {
    event.preventDefault();

    firebase.uploadImageToStorage(file).then((url) => {
      //setImage(url); <- don't think I need that there now..
      firebase.updateUser({picture: url});
    })
  }

  return (
    <form onSubmit={onUploadImage} className={classes.avatar}>
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
      </label>
      <Button type="submit" disabled={!file}>Upload</Button>
    </form>
  );
}
