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
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  input: {
    width: 650
  },
}));

export default function BaseSpirit() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <TextField 
        id='base-spirit'
        label='Base Spirit'
        variant='outlined'
        margin='normal'
        InputProps={{
          className: classes.input
        }}
      />
    </Container>
  );
}
