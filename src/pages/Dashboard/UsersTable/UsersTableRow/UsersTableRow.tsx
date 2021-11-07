import { FC, useState } from "react";
import { TableCell, TableRow, Collapse, IconButton } from "@mui/material";
import { ExpandMoreRounded, ExpandLessRounded } from "@mui/icons-material";

import UsersTableControl from "../UsersTableControl/UsersTableControl";

import { useStyles } from "./UsersTableRow.styles";

import { IUsersTableRowProps } from "./UsersTableRow.interfaces";

const UserTableRow: FC<IUsersTableRowProps> = ({ user }) => {
	const classes = useStyles();

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const expandButtonClickHandler = (): void => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<>
			<TableRow className={classes.tableRow}>
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
						<UsersTableControl user={user} />
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

export default UserTableRow;
