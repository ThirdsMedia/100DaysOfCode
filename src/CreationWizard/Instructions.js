import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 425,
  },
}));

const glassware = [
  "Rocks",
  "Collins",
  "Highball",
  "Lowball",
  "Hurricane",
  "Tiki",
  "Coupe",
  "Nick and Nora",
  "Martini",
];

const methods = [
  "Shake",
  "Stir",
  "In Glass",
  "Whip Shake",
  "Infuse",
];

export default function Instructions() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.formContainer}>
      <Grid container>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Build Method</InputLabel>
            <Select
              native
              inputProps={{
                name: 'method',
                id: 'method-native',
              }}
            >
              <option aria-label="None" value="" />
              {
                methods.map((method) => {
                  return <option value={method}>{method}</option>
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Glassware</InputLabel>
            <Select
              native
              inputProps={{
                name: 'glass',
                id: 'glass-native',
              }}
            >
              <option aria-label="None" value="" />
              {
                glassware.map((glass) => {
                  return <option value={"Whip Shake"}>{glass}</option>
                })
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
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