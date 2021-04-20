import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
//import MetricSelector from './MetricSelector';
//import ImperialSelector from './ImperialSelector';
import spirits from '../static/spirits';
import {
  Container,
  TextField,
  FormControl,
  FormControlLabel,
  Select,
  ListSubheader,
  MenuItem,
  Checkbox,
  Button,
  Typography,
  Slider,
  Switch,
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
  const [unitType, setUnitType] = useState(false);
  const [baseSpirit, setBaseSpirit] = useState({});

  const handleUnitType = (e) => {
    setUnitType(!unitType)
    setBaseSpirit({...baseSpirit, [e.target.name]: e.target.value})
    console.log(e.target.name, unitType)
  }
  
  const onChangeInput = (e) => {
    setBaseSpirit({...baseSpirit, [e.target.name]: e.target.value})
  }

  const onChangeSlider = name => (event, newValue) => {
    setBaseSpirit({...baseSpirit, [name]: newValue})
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    if (baseSpirit) {
      cocktail.buildCocktailIngredient(baseSpirit)
    }
  }

    /*
     * So at <form onSubmit={testFunction}> This function would be the one that adds the object to the larger cocktail object
     * Until then, the input changes should be modifying the temporary object initialized here within this component
     */

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <form noValidate onSubmit={onSubmitForm}>
        <FormControlLabel
          control={<Switch color="secondary" id="unit" name="unit" size="small" />}
          label="Unit Type"
          onChange={(e) => handleUnitType(e)}
        />
        <div>
          <TextField 
            id='baseSpiritName'
            name='name'
            value={baseSpirit.name || ''}
            label='Ingredient'
            variant='outlined'
            margin='normal'
            InputProps={{className: classes.input}}
            onChange={(e) => onChangeInput(e)}
          />
          <FormControl name='spiritSelector' variant="outlined" className={classes.formControl}>
            <Select 
              defaultValue="" 
              id='baseSpiritType'
              name='type'
              value={baseSpirit.type || ''}
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
            unitType
              ? (
                <div>
                  <Typography id="discrete-slider" gutterBottom>
                    Milliliters
                  </Typography>
                  <Slider
                    id="baseSpiritAmount"
                    name="amount"
                    defaultValue={15}
                    valueLabelDisplay="auto"
                    step={5}
                    min={5}
                    max={120}
                    marks
                    onChange={onChangeSlider("amount")}
                  />
                </div>
              ) : (
                <div>
                  <Typography id="discrete-slider" gutterBottom>
                    Ounces
                  </Typography>
                  <Slider
                    id='baseSpiritAmount'
                    name='amount'
                    defaultValue={1}
                    valueLabelDisplay="auto"
                    step={0.25}
                    min={0.25}
                    max={6}
                    marks
                    onChange={onChangeSlider("amount")}
                  />
                </div>
            )
          }
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
        </div>
      </form>
    </Container>
  );
}

