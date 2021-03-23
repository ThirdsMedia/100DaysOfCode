import React from 'react';
import {
  Drawer,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    maxWidth: 500,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Nunito',
    padding: 5,
  },
}));

export default function InfoDrawer({ step, stepTitle, isOpen, handleDrawer }) {
  const classes = useStyles();

  const steps = () => {
    switch (step) {
      case 0:
        return `help text1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaBBBBBBBBBBBBBBBBBBBBB
                  CCCCCCCCCCCCCCCCCCCCCCC`
      case 1:
        return `Text 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        `
      case 2:
        return `Text 3 yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                yyyyyyYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYyyyyyyyyy
        `
      case 3:
        return `Text 4 GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggggggg
                ggggggggggggggggggggggggggggggggggggggggggggggggg aaaaaaa
                GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggggggg
                gggggggggggggggggggggggggggggggggggggggggghghggggggg`
      default:
        return false
    }
  }

  return (
    <Drawer
      anchor='right'
      open={isOpen}
      onClose={handleDrawer}
      variant='persistent'
    >
      <Grid container direction='column' className={classes.root}>
        {
          step <= 3
          ? (
            <div>
              <Typography className={classes.title} variant='h5'>{stepTitle}</Typography>
              <Divider />
              <Typography variant="p">{steps()}</Typography>
            </div>
          )
          : false
        }
      </Grid>
    </Drawer>
  );
}
