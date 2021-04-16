import React, { useState, useEffect } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import BasicInfo from './BasicInfo';
import BaseSpirit from './BaseSpirit';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import {
  Collapse,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from '@material-ui/core';

// You may need to refer to this: https://stackoverflow.com/questions/61215349/material-ui-stepper-not-keeping-state-when-move-next-or-back
function RenderStep(step) {
  switch (step) {
    case 0:
      return <BasicInfo />
    case 1:
      return <BaseSpirit />
    case 2:
      return <Ingredients />
    case 3: 
      return <Instructions />
    default:
      return false
  }
}

export default function CocktailStepper() {
  const [checked, setChecked] = useState(false);
  const cocktail = useCocktail();

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse appear in={checked} {
      ... checked ? { timeout: 1000 } : {}
    }>
      <Stepper activeStep={cocktail.activeStep} orientation="vertical">
      {
        cocktail.steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent id={`step-${cocktail.activeStep}`}>
              <Typography component='span'>
                {RenderStep(index)}
              </Typography>
            </StepContent>
          </Step>
        ))
      }
      </Stepper>
    </Collapse>
  )
}
