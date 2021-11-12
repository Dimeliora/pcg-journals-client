import { FC, useState, useLayoutEffect } from "react";
import { Switch } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";

import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import ComputersTable from "./ComputersTable/ComputersTable";
import Computer from "./Computer/Computer";
import ComputerForm from "./ComputerForm/ComputerForm";

import { useAppDispatch } from "../../store/hooks/store.hooks";
import { useStyles } from "./Computers.styles";

import { getAllComputers } from "../../store/reducers/computers.reducer";

import { COMPUTERS_PER_PAGE_OPTIONS } from "./Computers.constants";

import { Roles } from "../../interfaces/user.interfaces";

const Computers: FC = () => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const [search, setSearch] = useState<string>("");
	const [page, setPage] = useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = useState<number>(
		COMPUTERS_PER_PAGE_OPTIONS[0]
	);

	useLayoutEffect(() => {
		dispatch(getAllComputers());
	}, [dispatch]);

	const searchChangeHandler = (value: string): void => {
		setSearch(value);
	};

	const changePageHandler = (value: number): void => {
		setPage(value);
	};

	const rowsPerPageChangeHandler = (value: number): void => {
		setRowsPerPage(value);
		setPage(0);
	};

	return (
		<Container maxWidth="xl">
			<Paper className={classes.computersSection}>
				<Typography variant="h4" component="h2">
					Серверы и АРМ
				</Typography>
				<Switch>
					<PrivateRoute
						path="/computers"
						render={() => (
							<ComputersTable
								page={page}
								rowsPerPage={rowsPerPage}
								search={search}
								onPageChange={changePageHandler}
								onRowsPerPageChange={rowsPerPageChangeHandler}
								onSearchChange={searchChangeHandler}
							/>
						)}
						allowedRole={Roles.USER}
						exact
					/>
					<PrivateRoute
						path="/computers/edit/:id?"
						component={ComputerForm}
						allowedRole={Roles.USER}
						exact
					/>
					<PrivateRoute
						path="/computers/:id"
						component={Computer}
						allowedRole={Roles.USER}
					/>
				</Switch>
			</Paper>
		</Container>
	);
};

export default Computers;
