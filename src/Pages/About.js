import React from 'react';
import MainBar from '../Components/MainBar';
import {
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default function About() {
  return (
    <div>
      <MainBar />
      <Typography>About ThirdsMedia</Typography>
    </div>
  );
}
