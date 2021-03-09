import React, { useState, useEffect } from 'react';
import MainBar from '../Helpers/MainBar';
import BasicInfo from './BasicInfo';
import BaseSpirit from './BaseSpirit';
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
  button: {
    borderRadius: 37,
    width: 250
  },
  buttonDiv: {
    flex: 1,
    margin: 25,
    textAlign: 'center',
  },
}));

// You may need to refer to this: https://stackoverflow.com/questions/61215349/material-ui-stepper-not-keeping-state-when-move-next-or-back
function getStepContent(step) {
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

export default function Create() {
  const classes = useStyles();
  const steps = ['Basic Information', 'Base Spirit', 'Ingredients', 'Instructions'];
  const [checked, setChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [readyForReview, setReadyForReview] = useState(false);
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
    // This should also be pushing the entered data into the object
    // This could get complicated. I'll need to give each input a unique ID so that if I backtrack I can have it update
    // The unique item you'd want to change otherwise stuff could get messy
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } 
  }

  const handleReview = () => {
    setReadyForReview(true)
  }

  return (
    <main>
      <MainBar />
      <Collapse appear in={checked} {
        ... checked ? { timeout: 1000 } : {}
      }>
        {/* This div is essentially the AppBar containing the up, down, and info icons */}
        <div className={classes.stepNav}>
          <IconButton disabled={activeStep === 0} onClick={handleBack}>
            <ExpandLessIcon />
          </IconButton>
          <Scroll to={`step-${activeStep}`} smooth="true">
            <IconButton
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {
                // If you're on the last step then display the CheckCircle instead of the ExpandMore
                activeStep >= steps.length - 1
                  ? <CheckCircleIcon onClick={handleReview} />
                  : <ExpandMoreIcon />
              }
            </IconButton>
          </Scroll>
          {
            // If you're at the end of your stepper then stop showing the help icon
            activeStep <= steps.length - 1
              ? <IconButton className={classes.infoButton} onClick={handleHelp}>
                  <InfoOutlinedIcon />
                </IconButton>
              : false
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
                  {
                    // Stop showing the secondary ExpandMoreIcon if you've reached the Instructions step
                    // Also, this ExpandMoreIcon should push data to the recipe object array
                    index < steps.length - 1
                      ? <IconButton color="primary">
                          <ExpandMoreIcon onClick={handleNext} fontSize="large" />
                        </IconButton>
                      : false
                  }
                </StepContent>
              </Step>
            ))
          }
        </Stepper>
      </Collapse>
      <div className={classes.buttonDiv}>
      {
        // Once all steps are completed then display the Review button
        readyForReview && activeStep >= steps.length
          ? <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              href="/cocktail"
              onClick={() => console.log("Went to next")}
            >
              Review
            </Button>
          : false
      }
      </div>
    </main>
  );
}

