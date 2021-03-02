import React, { useState, useEffect } from 'react';
import MainBar from './MainBar';
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Container,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  info: {
    minHeight: '100vh',    
    backgroundSize: 'cover',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/dark-cocktail.jpg'})`,
    backgroundPosition: 'center',
    textAlign: 'center',
  },
  appBar: {
    position: 'sticky',
    top: 0,    
    zIndex: 1,
  },
  formDesc: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 17,
    padding: 30,
  },
  goDown: {
    fontSize: '4rem',    
  },
  createForm: {
    minHeight: '100vh',
  },
}));

export default function Create() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });

  /* Unlike previous projects, this should all go on one page. If it's going to be converted to mobile it makes sense
   * To just keep scrolling down until you've reached the bottom. Then there will be a button to take a picture
   * Then after all that it only scrolls to the Review page and then you can submit it.  
   */

  return (
    <main className={classes.info}>
      <MainBar />
      <Collapse appear in={checked} {
        ... checked ? { timeout: 2000 } : {}
      }>
        <Box mt={10} m={10}>
          <Typography className={classes.formDesc} color="textSecondary" component="p">
            Welcome to the Creation Wizard. This tool empowers you to build amazing creations and store them in a central
            location to be shared amongst your peers and colleagues. The few text fields are for you to enter basic information about the 
            cocktail such as who created it, where and when it was created, it's name, and a description. After that you
            will be able to enter in the ingredients. Make sure to specify the item's name and brand, e.g. "Botanist Gin", vs
            just Gin. Doing so will speed up the approval process. 
          </Typography>
        </Box>
        <Scroll to="createForm" smooth="true">
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </Collapse>
      <div id="createForm" className={classes.createForm}>
        {/* The build form here */}
      </div>
    </main>
  );
}
