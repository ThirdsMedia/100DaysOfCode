import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import MetricSelector from '../Components/MetricSelector';
import ImperialSelector from '../Components/ImperialSelector';
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
} from '@material-ui/core';
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
  nextButton: {
    borderRadius: 37,
  },
}));

export default function BaseSpirit() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const cocktailData = cocktail.theCocktailData;
  const [isMetric, setIsMetric] = useState(false);
  const [baseSpiritObject, setBaseSpiritObject] = useState({});
  /*{
    amount: '',
    name: '',
    type: '',
  }*/

  const handleIsMetric = () => {
    setIsMetric(!isMetric)
  }

  /*
   * The way to make this work so that it adds everything to an object is to wrap the form in a <form> tag (go figure),
   * and then create an object above. Then you create a function in CocktailProvider which takes an object as an argument,
   * and adds it to the cocktailData object the same way buildCocktailFromInput does. 
   * Should work.
   */

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
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
          onChange={(e) => cocktail.buildCocktailFromInput(e)}
          InputProps={{
            className: classes.input
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
                  <MenuItem 
                    key={id}
                    value={spirit}
                  >
                    {spirit}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
      </div>
      {
        isMetric // this part seems tricky, but maybe not
          ? <MetricSelector />
          : <ImperialSelector />
      }
    </Container>
  );
}

