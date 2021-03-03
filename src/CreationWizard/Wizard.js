import React, { useState, useEffect } from 'react';
import MainBar from '../MainBar';
import BasicInfo from './BasicInfo';
import {
  Typography,
  Collapse,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Container,
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
  helpContainer: {
    backgroundColor: 'rgba(0,0,0,2)',
    zIndex: 1,
    minHeight: '80vh',
    position: 'fixed',
    borderRadius: 37,
  },
  helpText: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicInfo />
    case 1:
      return <BasicInfo />
    case 2:
      return <BasicInfo />
    default:
      return 'Unknown step';
  }
}

function Help({ step }) {
  const classes = useStyles();
  const helpText = [
    "help text1",
    "help text2",
    "help text3",
    "help text4",
  ];

  const steps = () => {
    switch (step) {
      case 0:
        return helpText[0]
      case 1:
        return helpText[1]
      case 2:
        return helpText[2]
      case 3:
        return helpText[3]
      default:
        return false
    }
  }

  return (
    <Container maxWidth="lg" className={classes.helpContainer}>
      <Typography 
        component="p" 
        className={classes.helpText} 
        color="textSecondary"
      >
        { steps() }
      </Typography>
    </Container>
  );
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
          <IconButton className={classes.infoButton} onClick={handleHelp}>
            <InfoOutlinedIcon />
          </IconButton>
        </div>
        { showHelp ? <Help step={activeStep} /> : false }
        <Stepper activeStep={activeStep} orientation="vertical">
          {
            steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography id={`step-${activeStep}`}>{getStepContent(index)}</Typography>
                </StepContent>
              </Step>
            ))
          }
        </Stepper>
      </Collapse>
    </main>
  );
}
