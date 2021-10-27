import { FC } from "react";
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";

import UsersTableMenu from "./UsersTableMenu/UsersTableMenu";

import { useStyles } from "./UsersTable.styles";

import { IUsersTableProps } from "./UsersTable.interfaces";

const UsersTable: FC<IUsersTableProps> = ({ users }) => {
	const classes = useStyles();

	return (
		<Table aria-label="Users table">
			<TableHead>
				<TableRow>
					<TableCell>Имя пользователя</TableCell>
					<TableCell>Роли пользователя</TableCell>
					<TableCell align="right">
						Управление пользователем
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{users.map((user) => (
					<TableRow key={user.id} className={classes.tableRow}>
						<TableCell>{user.username}</TableCell>
						<TableCell>
							{user.roles
								.map((role) => role.description)
								.join(", ")}
						</TableCell>
						<TableCell align="right">
							<UsersTableMenu />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default UsersTable;
