import React, { useState } from 'react';
import MetricSelector from '../Helpers/MetricSelector';
import ImperialSelector from '../Helpers/ImperialSelector';
import {
  Container,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton,
  Switch,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';

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
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  nextItem: {
    textAlign: 'center',
  },
}));

function IngredientInput({ isMetric }) {
  const classes = useStyles();
  const [isUnitIngredient, setIsUnitIngredient] = useState(true);

  const handleIsUnitIngredient = () => {
    setIsUnitIngredient(!isUnitIngredient)
  }

  return (
    <div>
      <Grid container alignItems="center" spacing={10}>
        <Grid item xs>
          <TextField 
            id='ingredient'
            label='Ingredient'
            variant='outlined'
            margin='normal'
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                name="recipe-type"
                color="secondary"
                onChange={handleIsUnitIngredient}
              />
            }
            label="Has Unit?"
          />
        </Grid>
      </Grid>
      {
        isUnitIngredient 
          ? (
            isMetric
              ? <MetricSelector />
              : <ImperialSelector />
          )
          : false
      }
    </div>
  );
}

export default function Ingredients() {
  const classes = useStyles();
  const [isMetric, setIsMetric] = useState(false);
  const newInput = {
    'amount': '',
    'name': '',
    'unit': '',
  };
  const [inputs, setInputs] = useState([{...newInput}]);

  const handleIsMetric = () => {
    setIsMetric(!isMetric)
  }

  const addNewInput = () => {
    setInputs([...inputs, {...newInput}])
    console.log(window.pageYOffset)
  }

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <FormControlLabel
        control={<Checkbox color="secondary" id="metric" size="small" />}
        label="Metric"
        onChange={handleIsMetric}
      />
      {
        inputs.map((input, id) => { 
          return <IngredientInput key={`ingredient-${id}`} isMetric={isMetric} />
        })
      }
      <div className={classes.nextItem}>
        <IconButton onClick={addNewInput} color="primary">
          <AddBoxIcon fontSize="large"/>
        </IconButton>
      </div>
    </Container>
  );
}
