import React from 'react';
import {
	Box,
	Typography,
  Link,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  thirds: {
    color: theme.palette.secondary.main,
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Box mt={4}>

      <Typography align="center" variant="body2">
        Empowered by{" "}
        <Link className={classes.thirds} href="https://thirdsmedia.com">
          ThirdsMedia
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Divider />
    </Box>
  );
}
