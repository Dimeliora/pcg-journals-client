import { FC, useState } from "react";
import { TableCell, TableRow, Collapse, IconButton } from "@mui/material";
import { ExpandMoreRounded, ExpandLessRounded } from "@mui/icons-material";

import UserTableControl from "../UserTableControl/UserTableControl";

import { useStyles } from "./UsersTableRow.styles";

import { IUserTableRowProps } from "./UserTableRow.interfaces";
import { Roles } from "../../../../interfaces/roles.enum";

const UserTableRow: FC<IUserTableRowProps> = ({ user }) => {
	const classes = useStyles();

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const expandButtonClickHandler = (): void => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<>
			<TableRow
				key={user.id}
				className={classes.tableRow}
			>
				<TableCell>{user.username}</TableCell>
				<TableCell>
					{user.roles.map((role) => role.description).join(", ")}
				</TableCell>
				<TableCell align="right">
					<IconButton
						aria-label="Раскрыть"
						size="small"
						onClick={expandButtonClickHandler}
					>
						{isExpanded ? <ExpandLessRounded /> : <ExpandMoreRounded />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow className={classes.tableRowCollapse}>
				<TableCell colSpan={3}>
					<Collapse in={isExpanded} timeout="auto" unmountOnExit>
						<UserTableControl
							isAdmin={user.roles.some((role) => role.value === Roles.ADMIN)}
						/>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

export default UserTableRow;
