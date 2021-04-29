import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MainBar from '../Components/MainBar';
import InfoDrawer from './InfoDrawer';
import CocktailStepper from './CocktailStepper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link as Scroll } from 'react-scroll';
import { useCocktail, CocktailProvider } from '../Providers/CocktailProvider';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.main,
    display: 'flex',
  },
  infoButton: {
    float: 'right',
    textAlign: 'flex-end',
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

// It seems like it would be a good idea to either wrap this is a FormProvider as well or, 
// ... just use useForm inside of CocktailProvider since you've already created a custom provider
// All I need to pass along is register, formState: { errors }, and handleSubmit
export default function Wizard() {
  return (
    <CocktailProvider>
      <Create />
    </CocktailProvider>
  );
}

function Create() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => setIsOpen(!isOpen)

  const onSubmitForm = () => {
    console.log("Teh cocktail: ", cocktail.recipe);
  }

  return (
    <main>
      <MainBar noLogo />
      <AppBar 
        position='sticky' 
        elevation={0} 
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton disabled={cocktail.activeStep === 0} onClick={cocktail.handleBack}>
            <ExpandLessIcon />
          </IconButton>
          <Scroll to={`step-${cocktail.activeStep}`} smooth="true">
            <IconButton
              variant="contained"
              color="primary"
              onClick={cocktail.handleNext}
            >
            {
              cocktail.activeStep > cocktail.steps.length - 1
                ? <CheckCircleIcon />
                : <ExpandMoreIcon />
            }
            </IconButton>
          </Scroll>
          {
            /* If you're at the end of your stepper then stop showing the help icon */
            cocktail.activeStep <= cocktail.steps.length - 1
              ? <IconButton className={classes.infoButton} onClick={handleDrawer}>
                  <InfoOutlinedIcon />
                </IconButton>
              : false
          }
        </Toolbar>
      </AppBar>
      <div>
        <InfoDrawer 
          step={cocktail.activeStep} 
          stepTitle={cocktail.steps[cocktail.activeStep]}
          isOpen={isOpen}
          handleDrawer={handleDrawer}
        /> 
        { /* CocktailStepper should receive all of the useForm methods as props */}
        <CocktailStepper />
      </div>
      <div className={classes.buttonDiv}>
      {
        /* Once all steps are completed then display the Review button */
        cocktail.activeStep === cocktail.steps.length
          ? <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              // This is where useForm's handle submit should be
              onClick={cocktail.handleSubmit(onSubmitForm)}
            >
              Review
            </Button>
          : false
      }
      </div>
    </main>
  );
}

