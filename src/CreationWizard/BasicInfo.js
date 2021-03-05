import React from 'react';
import {
  Container,
  TextField,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
}));

export default function BasicInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField 
            id='name'
            label='Name'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          <TextField 
            id='creator'
            label='Creator'
            variant='outlined'
            margin='normal'
            fullWidth
          />
        </Grid>
        <Grid item xs>
          <TextField 
            id='location'
            label='Location'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          <TextField 
            id='date'
            variant='outlined'
            margin='normal'
            fullWidth
            type='date'
          />
        </Grid>
      </Grid>
      <TextField 
        id='description'
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
      />
    </Container>
  );
}
