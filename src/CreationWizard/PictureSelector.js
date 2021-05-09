import React, { useState } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  IconButton,
  Button,
  Avatar,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  imageSelector: {
    height: theme.spacing(26),
    width: theme.spacing(26),
  },
  button: {
    textTransform: 'none',
    margin: 10,
    fontFamily: 'Nunito',
  },
}));

export default function PictureSelector() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const firebase = useFirebase();
  const [image, setImage] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    const imageFile = URL.createObjectURL(e.target.files[0]);
    setImage(imageFile);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (file) {
      firebase.uploadImageToStorage(file).then((url) => {
        cocktail.buildFromInput({picture: url});
        setDisabled(false);
      });
    } else {
      setError("You must upload a valid picture");
    }

  }

  return (
    <div className={classes.formContainer}>
      <form onSubmit={onSubmitForm}>
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
              className={classes.imageSelector} 
              src={image}
            />
          </IconButton>
          {error ? <span>{error}</span> : false}
        </label>
        <Button type="submit" disabled={!file}>Submit</Button>
      </form>
      <div>
        <Button
          className={classes.button}
          type="submit"
          disabled={disabled}
          color="primary"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          onClick={() => cocktail.handleNext()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
