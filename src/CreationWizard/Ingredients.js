import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import { useForm, Controller } from 'react-hook-form';
import {
  Grid,
  TextField,
  IconButton,
  FormControl,  
  Select,
  ListSubheader,
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
  inputField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  slider: {
    marginTop: 20,
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
    style={{ cursor: "pointer" }}
  />
);

const NextButton = ({ onClick }) => {
  const classes = useStyles(); 
  
  return (
    <div className={classes.buttonDiv}>
      <Button
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

const ImperialSlider = ({ onChange }) => {
  const classes = useStyles();

  return (
    <Slider
      id='amount'
      name='amount'
      defaultValue={1}
      valueLabelDisplay="auto"
      step={0.25}
      min={0.25}
      max={6}
      marks
      onChange={onChange}
      className={classes.slider}
    />
  );
}

const MetricSlider = ({ onChange }) => {
  const classes = useStyles();

  return (
    <Slider
      id='amount'
      name='amount'
      defaultValue={15}
      valueLabelDisplay="auto"
      step={5}
      min={5}
      max={80}
      marks
      onChange={onChange}
      className={classes.slider}
    />
  );
}

const InputField = ({ id, register, onClick, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputField}>
      <TextField 
        register
        label="Ingredient Name"
        id={id} 
        name='name' 
        variant='outlined'
        onChange={onChange} 
        InputProps={{ className: classes.input}}
      />
      <IconButton>
        <AddBoxIcon
          color="primary"
          fontSize="large"
          onClick={onClick}
        />
      </IconButton>
    </div>
  );
};

export default function Ingredients() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const units = [ "fl. oz", "ml", "dash" ];
  const { register, handleSubmit, control } = useForm();
  const [unitType, setUnitType] = useState(units[0]);
  const [spiritObject, setSpiritObject] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [visible, setVisible] = useState(false);

  const onChangeSlider = name => (event, newValue) => {
    setSpiritObject({...spiritObject, [name]: newValue})
  }

  const onChangeInput = (e) => {
    setSpiritObject({...spiritObject, [e.target.name]: e.target.value})
    console.log("Spirit object: ", spiritObject)
  }

  const onAddIngredient = () => {
    setIngredients([...ingredients, {id: uuidv4(), ...spiritObject}])
    setVisible(false);
  }

  const onRemoveIngredient = (id) => {
    console.log(ingredients.findIndex((ingredient) => ingredient.id === id));
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  }

  const onSubmit = () => {
    console.log("Ingredients: ", ingredients)
  }

  return (
    <form 
      noValidate 
      className={classes.formContainer}
      id='ingredients'
      name='ingredients'
      onSubmit={handleSubmit(onSubmit)} 
    >
      <div>
        <InputField
          register={{...register('name')}}
          onChange={(e) => onChangeInput(e)}
          onClick={() => setVisible(true)}
        />
        {
          visible ?
            <div>
              <Typography id="unitSlider" gutterBottom>
                { unitType === 'ml' ? 'Milliliters' : 'Fluid Ounces' }
              </Typography>
              <Grid container className={classes.grid}>
                <Grid item xs={10}>
                { unitType === 'ml' ? 
                  <MetricSlider onChange={onChangeSlider("amount")} /> : 
                  <ImperialSlider onChange={onChangeSlider("amount")} />
                }
                </Grid>
                <Grid item>
                  <FormControl variant="outlined">
                    <Select 
                      name='unit'
                      defaultValue={unitType}
                      id="spiritType"
                      className={classes.selector}
                      onChange={(e) => {
                        setUnitType(e.target.value);
                        onChangeInput(e)
                      }}
                    >
                      <ListSubheader>Unit Type</ListSubheader>
                      {
                        units.map((unit, id) => {
                          return <MenuItem key={id} value={unit}>{unit}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <div className={classes.buttonDiv}>
                <Button
                  className={classes.nextButton}
                  type="button"
                  color="primary"
                  variant="outlined"
                  onClick={onAddIngredient}
                >
                  Add Ingredient
                </Button>
              </div>
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
              </Grid>
            );
          })
        }
      </div>
      { ingredients.length > 0 ? <NextButton /> : false }
    </form>
  );
}

