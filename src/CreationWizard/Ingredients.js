import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  Grid,
  TextField,
  IconButton,
  FormControl,  
  Select,
  MenuItem,
  Button,
  Typography,
  Slider,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  input: {
    width: 900,
  },
  grid: {
    gridGap: theme.spacing(5),
    textAlign: 'center',
    justifyContent: 'center',
  },
  ingredientsList: {
    padding: 5,
    backgroundColor: theme.palette.background.secondary,
  },
  slider: {
    marginTop: 20,
  },
  selector: {
    marginRight: 10,
    minWidth: 100,
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(2),
    minWidth: 120,
  },
  nextItem: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'flex-end',
  },
  divider: {
    margin: 25,
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

const RemoveButton = ({ onClick }) => (
  <RemoveIcon
    fontSize="large"
    onClick={onClick}
    color="secondary"
    style={{ cursor: "pointer" }}
  />
);

const NextButton = ({ disabled, onClick }) => {
  const classes = useStyles(); 
  
  return (
    <div className={classes.buttonDiv}>
      <Button
        disabled={disabled}
        className={classes.nextButton}
        type="submit"
        color="primary"
        variant="outlined"
        endIcon={<ExpandMoreIcon />}
        onClick={onClick}
      >
        Keep going
      </Button>
    </div>
  );
}

const AmountSlider = ({ step, max, defaultValue, onChange }) => {
  const classes = useStyles();

  return (
    <Slider
      id='amount'
      name='amount'
      defaultValue={defaultValue}
      valueLabelDisplay="auto"
      step={step}
      min={step}
      max={max}
      marks
      onChange={onChange}
      className={classes.slider}
    />
  );
}

const ItemSelector = ({ label, defaultValue, items, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined">
      <Select 
        name={label}
        id={label}
        defaultValue={defaultValue}
        className={classes.selector}
        onChange={onChange}
      >
        {items.map((item, id) => {
          return <MenuItem key={id} value={item}>{item}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}

export default function Ingredients() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const units = [ "fl. oz", "ml", "dash" ];
  const types = [ "Base Spirit", "Modifier", "Non-alcoholic", "Miscellaneous", "Garnish" ];
  const [unit, setUnit] = useState(units[0]);
  const [name, setName] = useState('');
  const [type, setType] = useState(types[0]);
  const [amount, setAmount] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const onAddIngredient = () => {
    setIngredients([
      ...ingredients, 
      {
        amount: parseFloat(amount),
        id: uuidv4(), 
        name: name,
        type: type,
        unit: unit,
      }
    ]);
    setName('');
    setAmount(1);
    setType(types[0]);
    setIsVisible(false);
  }

  const onRemoveIngredient = (id) => {
    console.log(ingredients.findIndex((ingredient) => ingredient.id === id));
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  }

  const onHandleNext = () => {
    cocktail.addIngredients(ingredients);
    cocktail.handleNext();
  }

  // Need to add a Selector for spirit type to left of TextField
  return (
    <div className={classes.formContainer}>
      <div>
        <ItemSelector
          label='type'
          defaultValue={type}
          items={types}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          name="name"
          label="Ingredient Name"
          variant='outlined'
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{ className: classes.input}}
        />
        <IconButton disabled={name === '' ? true : false}>
          <AddBoxIcon
            color={name === '' ? 'grey' : 'primary'}
            fontSize="large"
            onClick={() => setIsVisible(true)}
          />
        </IconButton>
        {
          // The sliders aren't updating their values in time. Saves as the last value not the current one specified
          isVisible ?
            <div>
              <Grid container className={classes.grid}>
                <Grid item xs={10}>
                { 
                  unit === 'ml' ? 
                    <AmountSlider 
                      step={5} 
                      max={80} 
                      defaultValue={15} 
                      onChange={(event, newValue) => setAmount(newValue)} 
                    /> 
                  : unit === 'fl. oz' ? 
                      <AmountSlider 
                        step={0.25} 
                        max={8} 
                        defaultValue={1} 
                        onChange={(event, newValue) => setAmount(newValue)} 
                      />
                    : <AmountSlider 
                        step={1} 
                        max={10} 
                        defaultValue={2} 
                        onChange={(event, newValue) => setAmount(newValue)} 
                      />
                }
                </Grid>
                <Grid item>
                  <ItemSelector
                    label='unit'
                    defaultValue={unit}
                    items={units}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                className={classes.nextButton}
                color="primary"
                variant="outlined"
                onClick={onAddIngredient}
              >
                Add Ingredient
              </Button>
            </div> : false
        }
        <Divider className={classes.divider} />
        {
          ingredients.map((ingredient, id) => { 
            return (
              <Grid container className={classes.ingredientsList}>
                <Grid item xs={2}>
                  <RemoveButton onClick={() => onRemoveIngredient(ingredient.id)} />
                </Grid>
                <Grid item xs>
                  <Typography key={id}>
                    Name: {ingredient.name}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    Amount: {ingredient.amount}
                  </Typography>
                </Grid>
              <Divider variant='fullWidth' className={classes.divider} />
              </Grid>
            );
          })
        }
      </div>
      { ingredients.length > 0 ? <NextButton disabled={isVisible ? true : false} onClick={onHandleNext} /> : false }
    </div>
  );
}

