import { FC } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

import UsersTable from "./UsersTable/UsersTable";

import { useStyles } from "./Dashboard.styles";

const Dashboard: FC = () => {
	const classes = useStyles();

	return (
		<Box component="section">
			<Container maxWidth="xl">
				<Paper className={classes.dashboardUsers}>
					<Typography variant="h4" component="h2">
						Пользователи
					</Typography>
					<UsersTable />
				</Paper>
			</Container>
		</Box>
	);
};

export default Dashboard;
