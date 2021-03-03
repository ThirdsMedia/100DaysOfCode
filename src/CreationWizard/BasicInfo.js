import React from 'react';
import {
  Container,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    borderRadius: 17,
    fontFamily: 'Nunito',
  },
  textInput: {
    borderRadius: 37,
    width: 450,
    marginRight: 7,
  },
  longInput: {
    borderRadius: 37,
  },
}));

export default function BasicInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.formContainer}>
      <TextField 
        id='name'
        label='Name'
        variant='outlined'
        margin='normal'
        InputProps={{
          className: classes.textInput
        }}
      />
      <TextField 
        id='creator'
        label='Creator'
        variant='outlined'
        margin='normal'
        InputProps={{
          className: classes.textInput
        }}
      />
      <TextField 
        id='location'
        label='Location'
        variant='outlined'
        margin='normal'
        InputProps={{
          className: classes.textInput
        }}
      />
      <TextField 
        id='date'
        variant='outlined'
        margin='normal'
        type='date'
        InputProps={{
          className: classes.textInput
        }}
      />
      <TextField 
        id='description'
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
        InputProps={{
          className: classes.longInput
        }}
      />
    </Container>
  );
}
