import React from 'react';
import {
  Typography,
  Slider,
} from '@material-ui/core';

export default function MetricSelector() {
  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
        Milliliters
      </Typography>
      <Slider
        defaultValue={15}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={5}
        max={60}
      />
    </div>
  );
}
