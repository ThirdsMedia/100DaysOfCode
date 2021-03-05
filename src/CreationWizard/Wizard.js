import React, { useState, useEffect } from 'react';
import MainBar from '../MainBar';
import BasicInfo from './BasicInfo';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Help from './Help';
import {
  Typography,
  Collapse,
  IconButton,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  stepNav: {
    backgroundColor: '#303030',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  infoButton: {
    float: 'right',
  },
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicInfo />
    case 1:
      return <Ingredients />
    case 2:
      return <BasicInfo />
    case 3: 
      return <Instructions />
    default:
      return false
  }
}

export default function Create() {
  const classes = useStyles();
  const steps = ['Basic Information', 'Base Spirit', 'Ingredients', 'Instructions'];
  const [checked, setChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  
  useEffect(() => {
    setChecked(true);
  }, []);

  const handleHelp = () => {
    setShowHelp(!showHelp)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  return (
    <main>
      <MainBar />
      <Collapse appear in={checked} {
        ... checked ? { timeout: 1000 } : {}
      }>
        {/* Ths is essentially the AppBar containing the up, down, and info icons */}
        <div className={classes.stepNav}>
          <IconButton
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            <ExpandLessIcon />
          </IconButton>
          <Scroll to={`step-${activeStep}`} smooth="true">
            <IconButton
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {
                activeStep === steps.length - 1
                  ? <CheckCircleIcon />
                  : <ExpandMoreIcon />
              }
            </IconButton>
          </Scroll>
          {
            // If you're at the end of your stepper then stop showing the help icon
            activeStep === steps.length - 1
              ? <IconButton className={classes.infoButton} onClick={handleHelp}>
                  <InfoOutlinedIcon />
                </IconButton>
              : <Button>Next</Button>
          }
        </div>
        { 
          // Show help text if the InfoOutlinedIcon is clicked
          showHelp ? <Help step={activeStep} /> : false 
        }
        <Stepper 
          id={`step-${activeStep}`} 
          activeStep={activeStep} 
          orientation="vertical"
        >
          {
            steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                </StepContent>
              </Step>
            ))
          }
        </Stepper>
      </Collapse>
    </main>
  );
}

