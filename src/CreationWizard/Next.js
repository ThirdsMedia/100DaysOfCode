import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link as Scroll } from 'react-scroll';

export default function Next({ activeStep, steps, handleReview, handleNext }) {
  return (
    <Scroll to={`step-${activeStep}`} smooth="true">
      <IconButton
        variant="contained"
        color="primary"
        onClick={handleNext}
      >
      {
        activeStep > steps.length - 1
          ? <CheckCircleIcon onClick={handleReview} />
          : <ExpandMoreIcon />
      }
      </IconButton>
    </Scroll>
  );
}
