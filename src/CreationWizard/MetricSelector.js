import React from 'react';
import { useCocktail } from '../Providers/CocktailProvider.js';
import {
  Typography,
  Slider,
} from '@material-ui/core';

export default function MetricSelector() {
  const cocktail = useCocktail();

  console.log("From MetricSelector: ", cocktail.theCocktailData)
  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
        Milliliters
      </Typography>
      <Slider
        //id="metricAmount"
        //name="metricAmount"
        defaultValue={15}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={5}
        max={60}
        //onChange={(e) => {})
      />
    </div>
  );
}
