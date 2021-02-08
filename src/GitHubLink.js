import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/* icons */
import GitHubIcon from '@material-ui/icons/GitHub';

export default function GitHubLink() {
	return(
 		<Typography variant="body2" align="center">
			<Link href="https://github.com/ThirdsMedia">
				<GitHubIcon color="secondary" fontSize="large" />
			</Link>
		</Typography>
	);
}

