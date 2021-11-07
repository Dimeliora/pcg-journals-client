import { FC } from "react";
import {
	Box,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Stack,
	Skeleton,
} from "@mui/material";

import ComputersTableRow from "./ComputersTableRow/ComputersTableRow";

import { useStyles } from "./ComputersTable.styles";
import { useAppSelector } from "../../../store/hooks/store.hooks";

const ComputersTable: FC = () => {
	const classes = useStyles();

	const { isLoading, computers } = useAppSelector(({ computers }) => computers);

	let computersTableContent: JSX.Element = (
		<Stack>
			<Skeleton
				height={56.5}
				animation="wave"
				className={classes.computersTablePlaceholder}
			></Skeleton>
			<Skeleton
				height={56.5 * 5}
				animation="wave"
				className={classes.computersTablePlaceholder}
			></Skeleton>
		</Stack>
	);

	if (!isLoading) {
		computersTableContent = (
			<Table aria-label="Computers table">
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>Наименование</TableCell>
						<TableCell>Назначение</TableCell>
						<TableCell>Операционная система</TableCell>
						<TableCell>Последний бэкап</TableCell>
						<TableCell>Последние изменения</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{computers.map((computer) => (
						<ComputersTableRow key={computer._id} computer={computer} />
					))}
				</TableBody>
			</Table>
		);
	}

	return <Box className={classes.computersTable}>{computersTableContent}</Box>;
};

export default ComputersTable;
