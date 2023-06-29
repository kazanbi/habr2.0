import { Grid, Container } from '@mui/material'
import React, { FC } from 'react'

interface ContainerProps {
	children: React.ReactNode
}

export const ContainerLayout: FC<ContainerProps> = ({ children }) => {
	return (
		<Container maxWidth={'lg'}>
			<Grid container my={4}>
				<Grid item xs={9}>
					{children}
				</Grid>
				<Grid item xs>
					реклама
				</Grid>
			</Grid>
		</Container>
	)
}
