import React from 'react';
import {
  Container,
  Grid,
  Typography,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  formControl: {
    margin: theme.spacing(1)
  },
  button: {
    borderRadius: 37,
    width: 250,
  },
}));

export default function RecipeType({ handleRecipeType }) {
  const classes = useStyles();

  return (
    <Container className={classes.formContainer}>
      <Grid container alignItems="center">
        <Grid item xs>
        <Typography>
          What kind of recipe is this?
        </Typography>
        </Grid>
        <Grid item xs>
          <FormControl component="fieldset">
            <FormLabel component="legend">Recipe Type</FormLabel>
            <RadioGroup aria-label="type1" name="type1" onChange={handleRecipeType}>
              <FormControlLabel value="cocktail" control={<Radio />} label="Cocktail" />
              <FormControlLabel value="msi" control={<Radio />} label="Mixer/Syrup/Infusion" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Next
      </Button>
    </Container>
  );
}

