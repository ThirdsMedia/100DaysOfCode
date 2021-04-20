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
  const [baseSpirit, setBaseSpirit] = useState({});

  const handleIsMetric = () => {
    setIsMetric(!isMetric)
  }
  
  const onChangeInput = (e) => {
    setBaseSpirit({...baseSpirit, [e.target.name]: e.target.value})
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log("On submit: ", baseSpirit)
    cocktail.buildCocktailIngredient(baseSpirit)
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
//  console.log(baseSpiritObject)
  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <form noValidate onSubmit={onSubmitForm}>
        <FormControlLabel
          control={<Checkbox color="secondary" id="metric" size="small" />}
          label="Metric"
          onChange={handleIsMetric}
        />
          <TextField 
            id='baseSpiritName'
            name='name'
            value={cocktailData.baseSpirit.name}
            label='Ingredient'
            variant='outlined'
            margin='normal'
            InputProps={{className: classes.input}}
            onChange={(e) => onChangeInput(e)}
          />
          <FormControl name='spiritSelector' variant="outlined" className={classes.formControl}>
            <Select 
              // look up uncontrolled to controlled input errors
              defaultValue="" 
              id='baseSpiritType'
              name='type'
              value={cocktailData.baseSpirit.type}
              onChange={(e) => onChangeInput(e)}
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
        {
          isMetric ? <MetricSelector /> : <ImperialSelector />
        }
            <Button
              className={classes.nextButton}
              type="submit"
              color="primary"
              variant="contained"
              endIcon={<ExpandMoreIcon />}
              onClick={() => {
                document.getElementById(`step-${cocktail.activeStep}`).scrollIntoView()
                cocktail.handleNext()
              }}
            >
              Continue
            </Button>
      </form>
    </Container>
  );
}

