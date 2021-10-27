import { FC, useEffect } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

import UsersTable from "./UsersTable/UsersTable";

import { useStyles } from "./Dashboard.styles";
import { useAppSelector, useAppDispatch } from "../../store/hooks/store.hooks";

import { getUsers } from "../../store/reducers/admin.reducer";

const Dashboard: FC = () => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { users } = useAppSelector(({ admin }) => admin);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<Box component="section">
			<Container maxWidth="xl">
				<Paper className={classes.dashboardUsers}>
					<Typography
						variant="h4"
						component="h2"
					>
						Пользователи
					</Typography>
					<UsersTable users={users} />
				</Paper>
			</Container>
		</Box>
	);
};

export default Dashboard;
