import { FC } from "react";
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

import { IUsersTableProps } from "./UsersTable.interfaces";

const UsersTable: FC<IUsersTableProps> = ({ isLoading, users }) => {
	const classes = useStyles();

	const areUsersFetching = isLoading && users.length === 0;

	return areUsersFetching ? (
		<Stack>
			<Skeleton
				height={36.5}
				animation="wave"
				className={classes.tablePlaceholder}
			></Skeleton>
			<Skeleton
				height={46.5 * 3}
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
