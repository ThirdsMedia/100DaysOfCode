import React from 'react';
import {
  Typography,
  Slider,
} from '@material-ui/core';

export default function ImperialSelector() {
  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
        Ounces
      </Typography>
      <Slider
        defaultValue={1}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.25}
        marks
        min={0.25}
        max={6}
      />
    </div>
  );
}
