import React from 'react';
import ItemList from './ItemList';
import exampleDatabase from './exampleDatabase';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

/* 
 * I've added some imports from Material UI so I know what to work on next time.
 * I'm spent....
 */

export default function Search() {
  return (
    <div>
   		<h2>Search and Items Page</h2>
      <input type="text" />
          <ItemList data={exampleDatabase} />
    </div>
  );
}
