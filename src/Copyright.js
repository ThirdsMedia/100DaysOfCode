import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  	return (
		<Box mt={7}>
	    	<Typography variant="body2" align="center">
  	    		Empowered by 
      		<Link href="https://thirdsmedia.com">
        		{" ThirdsMedia"}
      		</Link>{" "}
        		{new Date().getFullYear()}
    		</Typography>
		</Box>
  	);
}
