import React, { useState, useEffect } from 'react';
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
  IconButton,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// You may need to refer to this: https://stackoverflow.com/questions/61215349/material-ui-stepper-not-keeping-state-when-move-next-or-back
function renderStep(step) {
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

export default function CocktailStepper({ steps, activeStep, handleNext }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse appear in={checked} {
      ... checked ? { timeout: 1000 } : {}
    }>
      <Stepper activeStep={activeStep} orientation="vertical">
      {
        steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent id={`step-${activeStep}`}>
              <Typography>{renderStep(index)}</Typography>
              {
                // Stop showing the secondary ExpandMoreIcon if you've reached the Instructions step
                index < steps.length - 1
                  ? <Scroll to={`step-${activeStep}`} smooth="true">
                      <IconButton color="primary">
                        <ExpandMoreIcon onClick={handleNext} fontSize="large" />
                      </IconButton>
                    </Scroll>
                  : false
              }
            </StepContent>
          </Step>
        ))
      }
      </Stepper>
    </Collapse>
  )
}
