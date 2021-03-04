import React from 'react';
import {
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    borderRadius: 17,
    fontFamily: 'Nunito',
  },
  button: {
    width: 250
  },
  longInput: {
    borderRadius: 37,
  },
}));

export default function Ingredients() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.formContainer}>
      <TextField 
        id='base-spirit'
        label='Name'
        variant='outlined'
        margin='normal'
        multiline
        rows='5'
        InputProps={{
          className: classes.longInput
        }}
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        size='small'
        startIcon={<AddAPhotoIcon />}
      >
        Choose Image
      </Button>
    </Container>
  );
}