import React from 'react';
import {
	Box,
	Typography,
  Link,
  Divider
} from '@material-ui/core';

export default function Copyright() {
  return (
	<Box mt={7}>
    <Divider />
		<Typography align="center" variant="body2">
			Empowered by{" "}
			<Link href="https://thirdsmedia.com">
				ThirdsMedia
			</Link>{" "}
			{new Date().getFullYear()}
		</Typography>
    <Divider />
	</Box>
  );
}
