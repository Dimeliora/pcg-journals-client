import { FC } from "react";
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";

import UserTableRow from "./UserTableRow/UserTableRow";

import { IUsersTableProps } from "./UsersTable.interfaces";

const UsersTable: FC<IUsersTableProps> = ({ users }) => {
	return (
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
