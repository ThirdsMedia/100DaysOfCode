import React, { useState } from 'react';
import MetricSelector from '../Components/MetricSelector';
import ImperialSelector from '../Components/ImperialSelector';
import spirits from '../static/spirits';
import {
  Container,
  TextField,
  FormControl,
  FormControlLabel,
  Select,
  InputLabel,
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
}));

export default function BaseSpirit() {
  const classes = useStyles();
  const [isMetric, setIsMetric] = useState(false);

  const handleIsMetric = () => {
    setIsMetric(!isMetric)
  }

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <FormControlLabel
        control={<Checkbox color="secondary" id="metric" size="small" />}
        label="Metric"
        onChange={handleIsMetric}
      />
      <div>
        <TextField 
          id='ingredient'
          label='Ingredient'
          variant='outlined'
          margin='normal'
          InputProps={{
            className: classes.input
          }}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <Select defaultValue="" id="search-filter">
            <ListSubheader>Spirit Type</ListSubheader>
            {
              spirits.map((spirit, id) => {
                return <MenuItem value={spirit}>{spirit}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
      {
        isMetric
          ? <MetricSelector />
          : <ImperialSelector />
      }
    </Container>
  );
}

