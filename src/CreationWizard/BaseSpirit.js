import React, { useState } from 'react';
import MetricSelector from '../Helpers/MetricSelector';
import ImperialSelector from '../Helpers/ImperialSelector';
import {
  Container,
  TextField,
  FormControlLabel,
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
      </div>
      {
        isMetric
          ? <MetricSelector />
          : <ImperialSelector />
      }
    </Container>
  );
}
