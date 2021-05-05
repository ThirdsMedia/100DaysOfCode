import React from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import {
  Container,
  Typography,
} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles(theme => ({
//}));

export default function Panel() {
//  const classes = useStyles();
  const firebase = useFirebase();

  return (
    <Container>
      <Typography>
        Employees
      </Typography>
      {
        firebase.user.employees.map((employee) => {
          console.log("Employee: ", firebase.getEmployees(employee))
        })
      }
    </Container>
  );
}
