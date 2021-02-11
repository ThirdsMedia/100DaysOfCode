import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
	return (
		<Box mt={4}>
			<Avatar src="./logo192.png"/>	
			<Typography component="h1" variant="h5">
				Search
			</Typography>
		</Box>
	);
}
