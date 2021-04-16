import React from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  Container,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
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
  formControl: {
    margin: theme.spacing(1),
  },
  buttonDiv: {
    textAlign: 'center',
  },
  nextButton: {
    borderRadius: 37,
    textTransform: 'none',
    margin: 10,
    fontFamily: 'Nunito',
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
  const cocktail = useCocktail();
  const cocktailData = cocktail.theCocktailData;

  return (
    <Container maxWidth="md" className={classes.formContainer}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Build Method</InputLabel>
        <Select
          native
          value={cocktailData.method}
          onChange={(e) => cocktail.buildCocktailFromInput(e)}
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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Glassware</InputLabel>
        <Select
          native
          value={cocktailData.glass}
          onChange={(e) => cocktail.buildCocktailFromInput(e)}
          inputProps={{
            name: 'glass',
            id: 'glass-native',
          }}
        >
          <option aria-label="None" value="" />
          {
            glassware.map((glass) => {
              return <option value={glass}>{glass}</option>
            })
          }
        </Select>
      </FormControl>
      <TextField 
        id='instructions'
        name='instructions'
        value={cocktailData.instructions}
        label='Instructions'
        variant='outlined'
        margin='normal'
        multiline
        rows='5'
        maxrows='10'
        onChange={(e) => cocktail.buildCocktailFromInput(e)}
      />
      <div className={classes.buttonDiv}>
        <Scroll to={`step-${cocktail.activeStep}`} smooth="true">
          <Button
            className={classes.nextButton}
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<ExpandMoreIcon />}
            onClick={cocktail.handleNext}
          >
            Almost there
          </Button>
        </Scroll>
      </div>
    </Container>
  );
}