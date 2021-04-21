import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  TextField,
  FormControl,
  Select,
  ListSubheader,
  MenuItem,
  Button,
  Typography,
  Slider,
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

const spirits = [
  "Bourbon",
  "Whiskey",
  "Scotch",
  "Brandy",
  "Cognac",
  "Rum",
  "Tequila",
  "Gin",
  "Vodka",
  "Absinthe",
  "Vermouth",
];
  
export default function BaseSpirit() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const [unitType, setUnitType] = useState('imperial');
  const [baseSpirit, setBaseSpirit] = useState({
    amount: 0,
    name: '',
    type: '',
    unit: unitType,
  });

  const handleUnitType = (e) => {
    setUnitType(e.target.value)
    setBaseSpirit({...baseSpirit, [e.target.name]: e.target.value})
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

  return (
    <div className={classes.formContainer}>
      <form noValidate onSubmit={onSubmitForm}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select 
            defaultValue="imperial" 
            id="spiritUnitType"
            value={unitType}
            onChange={handleUnitType}
          >
            <MenuItem value="imperial">Imperial</MenuItem>
            <MenuItem value="metric">Metric</MenuItem>
          </Select>
        </FormControl>
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
          unitType === 'metric'
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
              unitType === 'imperial' 
                ? ( 
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
                ) : false
            )
        }
        <div className={classes.buttonDiv}>
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
    </div>
  );
}

