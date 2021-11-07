import { FC, useLayoutEffect } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

import ComputersTable from "./ComputersTable/ComputersTable";

import { useAppDispatch } from "../../store/hooks/store.hooks";
import { useStyles } from "./Computers.styles";

import { getAllComputers } from "../../store/reducers/computers.reducer";

const Computers: FC = () => {
	const dispatch = useAppDispatch();

	const classes = useStyles();

	useLayoutEffect(() => {
		dispatch(getAllComputers());
	}, [dispatch]);

	return (
		<Box component="section">
			<Container maxWidth="xl">
				<Paper className={classes.computersSection}>
					<Typography variant="h4" component="h2">
						АРМ / Серверы
					</Typography>
					<ComputersTable />
				</Paper>
			</Container>
		</Box>
	);
};

export default Computers;
