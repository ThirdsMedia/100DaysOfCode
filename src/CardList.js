import React from 'react';
import CardItem from './CardItem';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default function CardList({ data }) {
	return (
		<Box mt={4}>
			<Grid container justify='flex-start' spacing={3}>
				{
					data.map((item) => {
						return (
							<Grid item>
								<CardItem item={item} />
							</Grid>
						);
					})
				}
			</Grid>
		</Box>
	);
}
