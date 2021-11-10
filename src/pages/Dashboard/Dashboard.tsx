import { FC } from "react";
import { Container, Paper, Typography } from "@mui/material";

import UsersTable from "./UsersTable/UsersTable";
import AddUserForm from "./AddUserForm/AddUserForm";

import { useStyles } from "./Dashboard.styles";

const Dashboard: FC = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xl">
			<Paper className={classes.dashboardUsers}>
				<Typography variant="h4" component="h2">
					Пользователи
				</Typography>

				<AddUserForm />
				<UsersTable />
			</Paper>
		</Container>
	);
};

export default Dashboard;
