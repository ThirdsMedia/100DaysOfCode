import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchBox: {
    margin: 20,
    borderRadius: 50,
    width: 700,
  },
});

export default function Search() {
	const classes = useStyles();

	return (
		<TextField 
			id="search"
			variant="outlined"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon />              
					</InputAdornment>
				),
				className: classes.searchBox
			}}
		/>
	);
}
