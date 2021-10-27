import { FC } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

import UsersTable from "../../components/UsersTable/UsersTable";

import { useStyles } from "./Dashboard.styles";

import { Roles } from "../../interfaces/roles.enum";
const MOCK_USERS = [
	{
		id: "43432",
		username: "admin",
		roles: [
			{
				value: Roles.USER,
				description: "Пользователь",
			},
			{
				value: Roles.ADMIN,
				description: "Администратор",
			},
		],
	},
	{
		id: "65654",
		username: "guest",
		roles: [
			{
				value: Roles.USER,
				description: "Пользователь",
			},
		],
	},
];

const Dashboard: FC = () => {
	const classes = useStyles();

	return (
		<Box component="section" className={classes.dashboard}>
			<Container maxWidth="xl">
				<Paper className={classes.dashboardUsers}>
					<Typography
						variant="h4"
						component="h2"
						className={classes.dashboardHeading}
					>
						Пользователи
					</Typography>
					<UsersTable users={MOCK_USERS} />
				</Paper>
			</Container>
		</Box>
	);
};

export default Dashboard;
