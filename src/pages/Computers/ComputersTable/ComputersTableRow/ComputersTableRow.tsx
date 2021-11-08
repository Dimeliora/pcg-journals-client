import { FC } from "react";
import { useHistory } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";
import cn from "classnames";

import { ReactComponent as PCIcon } from "../../../../assets/icons/pc.svg";
import { ReactComponent as ServerIcon } from "../../../../assets/icons/server.svg";

import { useStyles } from "./ComputersTableRow.styles";

import {
	ONE_DAY_IN_MS,
	DAYS_TO_BACKUP_OUTDATE,
} from "./ComputersTableRow.constants";

import { IComputersTableRowProps } from "./ComputersTableRow.interfaces";
import { ComputerTypes } from "../../../../interfaces/computer.interface";

const ComputersTableRow: FC<IComputersTableRowProps> = ({ computer }) => {
	const classes = useStyles();

	const history = useHistory();

	const rowClickHandler = (): void => {
		history.push(`/computers/${computer._id}`);
	};

	const updateDate = new Date(computer.updatedAt).toLocaleDateString();

	const [lastBackup] = computer.pcBackups
		.map(({ backupDate }) => new Date(backupDate))
		.sort((a, b) => b.getTime() - a.getTime());

	let lastBackupDate = "н/д";
	let isBackupOutdated = false;
	if (lastBackup) {
		lastBackupDate = lastBackup.toLocaleDateString();
		isBackupOutdated =
			Date.now() - lastBackup.getTime() >
			ONE_DAY_IN_MS * DAYS_TO_BACKUP_OUTDATE;
	}

	const PCTypeIcon =
		computer.pcType === ComputerTypes.PC ? PCIcon : ServerIcon;

	return (
		<TableRow className={classes.tableRow} onClick={rowClickHandler}>
			<TableCell align="center">
				<PCTypeIcon className={classes.pcTypeIcon} />
			</TableCell>
			<TableCell>{computer.pcName}</TableCell>
			<TableCell>{computer.pcPurpose}</TableCell>
			<TableCell>{computer.os}</TableCell>
			<TableCell
				align="center"
				className={cn({ [classes.outdated]: isBackupOutdated })}
			>
				{lastBackupDate}
			</TableCell>
			<TableCell align="center">
				{updateDate} ({computer.lastModifier.username})
			</TableCell>
		</TableRow>
	);
};

export default ComputersTableRow;
