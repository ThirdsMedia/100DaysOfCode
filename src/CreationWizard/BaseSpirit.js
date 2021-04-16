import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import MetricSelector from './MetricSelector';
import ImperialSelector from './ImperialSelector';
import spirits from '../static/spirits';
import { Link as Scroll } from 'react-scroll';
import {
  Container,
  TextField,
  FormControl,
  FormControlLabel,
  Select,
  ListSubheader,
  MenuItem,
  Checkbox,
  Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  input: {
    width: 650
  },
  formControl: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    minWidth: 120,
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

export default function BaseSpirit() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const cocktailData = cocktail.theCocktailData;
  const [isMetric, setIsMetric] = useState(false);
  const [baseSpiritObject, setBaseSpiritObject] = useState({});

  const handleIsMetric = () => {
    setIsMetric(!isMetric)
  }
  
  const testFunction = () => {
    console.log(baseSpiritObject)
    console.log("teset")
  }

  /*
   * The way to make this work so that it adds everything to an object is to wrap the form in a <form> tag (go figure),
   * and then create an object above. Then you create a function in CocktailProvider which takes an object as an argument,
   * and adds it to the cocktailData object the same way buildCocktailFromInput does. 
   * Should work.
   */

    /*
     * So at <form onSubmit={testFunction}> This function would be the one that adds the object to the larger cocktail object
     * Until then, the input changes should be modifying the temporary object initialized here within this component
     */

  // NOTE: onSubmit isn't working. Fix that next
  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <form noValidate onSubmit={() => console.log("test")}>
        <FormControlLabel
          control={<Checkbox color="secondary" id="metric" size="small" />}
          label="Metric"
          onChange={handleIsMetric}
        />
        <div>
          <TextField 
            id='baseSpirit'
            name='baseSpirit'
            value={cocktailData.baseSpirit}
            label='Ingredient'
            variant='outlined'
            margin='normal'
            InputProps={{className: classes.input}}
            onChange={(e) => {
              setBaseSpiritObject({...baseSpiritObject, [e.target.name]: e.target.value})
            }}
          />
          <FormControl name='spiritSelector' variant="outlined" className={classes.formControl}>
            <Select 
              // look up uncontrolled to controlled input errors
              defaultValue="" 
              id='spiritType'
              name='spiritType'
              onClick={(e) => cocktail.buildCocktailFromInput(e)}
            >
              <ListSubheader>Spirit Type</ListSubheader>
              {
                spirits.map((spirit, id) => {
                  return (
                    <MenuItem key={id} value={spirit}>
                      {spirit}
                    </MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        </div>
        {
          isMetric ? <MetricSelector /> : <ImperialSelector />
        }
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
              Continue
            </Button>
          </Scroll>
        </div>
      </form>
    </Container>
  );
}

