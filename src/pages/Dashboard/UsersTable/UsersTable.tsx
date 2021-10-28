import { FC, useEffect } from "react";
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Stack,
	Skeleton,
} from "@mui/material";

import UserTableRow from "./UserTableRow/UserTableRow";

import { useStyles } from "./UserTable.styles";
import {
	useAppSelector,
	useAppDispatch,
} from "../../../store/hooks/store.hooks";

import { getUsers } from "../../../store/reducers/admin.reducer";

const UsersTable: FC = () => {
	const classes = useStyles();

	const dispatch = useAppDispatch();

	const { isUsersFetching, users } = useAppSelector(({ admin }) => admin);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return isUsersFetching ? (
		<Stack>
			<Skeleton
				height={36.5}
				animation="wave"
				className={classes.tablePlaceholder}
			></Skeleton>
			<Skeleton
				height={46.5 * 5}
				animation="wave"
				className={classes.tablePlaceholder}
			></Skeleton>
		</Stack>
	) : (
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
					<UserTableRow key={user._id} user={user} />
				))}
			</TableBody>
		</Table>
	);
};

export default UsersTable;
