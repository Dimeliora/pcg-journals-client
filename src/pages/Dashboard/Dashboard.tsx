import { FC } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

import UsersTable from "./UsersTable/UsersTable";
import AddUserForm from "./AddUserForm/AddUserForm";

import { useStyles } from "./Dashboard.styles";

const Dashboard: FC = () => {
	const classes = useStyles();

	return (
		<Box component="section" className={classes.dashboard}>
			<Container maxWidth="xl">
				<Paper className={classes.dashboardUsers}>
					<Typography variant="h4" component="h2">
						Пользователи
					</Typography>

					<AddUserForm />
					<UsersTable />
				</Paper>
			</Container>
		</Box>
	);
};

export default Dashboard;
