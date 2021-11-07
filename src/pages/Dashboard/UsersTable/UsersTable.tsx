import { FC, useLayoutEffect } from "react";
import {
	Box,
	Typography,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Stack,
	Skeleton,
} from "@mui/material";

import UsersTableRow from "./UsersTableRow/UsersTableRow";

import { useStyles } from "./UsersTable.styles";
import {
	useAppSelector,
	useAppDispatch,
} from "../../../store/hooks/store.hooks";

import { getUsers } from "../../../store/reducers/admin.reducer";

const UsersTable: FC = () => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { isUsersFetching, users } = useAppSelector(({ admin }) => admin);

	useLayoutEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	let usersTableContent: JSX.Element = (
		<Stack>
			<Skeleton
				height={36.5}
				animation="wave"
				className={classes.usersTablePlaceholder}
			></Skeleton>
			<Skeleton
				height={46.5 * 5}
				animation="wave"
				className={classes.usersTablePlaceholder}
			></Skeleton>
		</Stack>
	);

	if (!isUsersFetching) {
		usersTableContent = (
			<Table aria-label="Users table" size="small">
				<TableHead>
					<TableRow>
						<TableCell>Имя пользователя</TableCell>
						<TableCell>Роли пользователя</TableCell>
						<TableCell align="right">Управление пользователем</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<UsersTableRow key={user._id} user={user} />
					))}
				</TableBody>
			</Table>
		);
	}

	return (
		<Box>
			<Typography
				variant="h5"
				component="h3"
				className={classes.usersTableHeading}
			>
				Список пользователей
			</Typography>

			{usersTableContent}
		</Box>
	);
};

export default UsersTable;
