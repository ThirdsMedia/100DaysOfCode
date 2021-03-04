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
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  button: {
    width: 250
  },
  buttonDiv: {
    paddingTop: 20,
    textAlign: 'center',
  },
}));

export default function Ingredients() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.formContainer}>
      <TextField 
        id='instructions'
        label='Instructions'
        variant='outlined'
        margin='normal'
        multiline
        rows='5'
        maxRows='10'
      />
      <div className={classes.buttonDiv}>
        <Button
          className={classes.button}
          variant="outlined"
          color="secondary"
          size='small'
          startIcon={<AddAPhotoIcon />}
        >
          Choose Image
        </Button>
      </div>
    </Container>
  );
}