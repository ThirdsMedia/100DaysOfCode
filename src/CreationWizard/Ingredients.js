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

export default function Ingredients() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.formContainer}>
      <TextField 
        id='base-spirit'
        label='Name'
        variant='outlined'
        margin='normal'
        InputProps={{
          className: classes.textInput
        }}
      />
    </Container>
  );
}
