import React from 'react';
/* 
 * You can find all of these components here: https://material-ui.com/getting-started/installation/
 * Then go to the side tab to Components or Components API and find all the components you could ever need there.
 */

import { withStyles, makeStyles } from '@material-ui/core/styles'; // Inline CSS API
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'; // So this just sets a default CSS standard for the App
import TextField from '@material-ui/core/TextField'; // The use here should be apparent
import Button from '@material-ui/core/Button';
import { green, blue } from '@material-ui/core/colors';


// Container -> https://material-ui.com/api/container/
// Box
// Grid
// TextField -> https://material-ui.com/api/text-field/
// Button -> https://material-ui.com/components/buttons/
// Link

const SubmitButton = withStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
    borderRadius: 50,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    }
  },
}))(Button)

// For general styling of regular elements such as <div> etc...
const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    padding: 10,
  },
}));

export default function Form() {
  const classes = useStyles();

  /*
   * So you should wrap whatever form in a Container and set the maxWidth
   * The maxWidth property's usefulness doesn't become apparent until you use the fullWidth property on child components
   *
   * CssBaseline establishes a base CSS standard for the application. 
   */

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.page}>
        <TextField
          id="name"
          label="name"
          margin="normal"
          required
          fullWidth
          InputProps={{
            className: classes.textField
          }}
        />
        <TextField
          id="email"
          label="email"
          margin="normal"
          required
          fullWidth
          InputProps={{
            className: classes.textField
          }}
        />
        <TextField
          id="password"
          label="password"
          margin="normal"
          type="password"
          required
          fullWidth
          InputProps={{
            className: classes.textField
          }}
        />
        <SubmitButton 
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
        >
          Register
        </SubmitButton>
      </div>
    </Container>
  );
}
