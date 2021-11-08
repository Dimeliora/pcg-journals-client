import { FC, ChangeEvent, useState } from "react";
import {
	Box,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TablePagination,
	Stack,
	Skeleton,
} from "@mui/material";

import ComputersTableRow from "./ComputersTableRow/ComputersTableRow";
import SearchField from "../../../components/SearchField/SearchField";

import { useStyles } from "./ComputersTable.styles";
import { useAppSelector } from "../../../store/hooks/store.hooks";

import { COMPUTERS_PER_PAGE_OPTIONS } from "./ComputersTable.constants";

import { IComputer } from "../../../interfaces/computer.interface";

const ComputersTable: FC = () => {
	const classes = useStyles();

	const { isLoading, computers } = useAppSelector(
		({ computers }) => computers
	);

	const [search, setSearch] = useState<string>("");
	const [page, setPage] = useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = useState<number>(
		COMPUTERS_PER_PAGE_OPTIONS[0]
	);

	const searchChangeHandler = (value: string): void => {
		setSearch(value);
	};

	const changePageHandler = (e: unknown, newPage: number): void => {
		setPage(newPage);
	};

	const rowsPerPageChangeHandler = (
		e: ChangeEvent<HTMLInputElement>
	): void => {
		setRowsPerPage(Number(e.target.value));
		setPage(0);
	};

	const filterComputers = (): IComputer[] => {
		const searchTemplate = search.trim().toLowerCase();

		if (searchTemplate.length === 0) {
			return computers;
		}

		return computers.filter(({ pcName, pcPurpose }) =>
			[pcName, pcPurpose].some((prop) =>
				prop.toLowerCase().includes(searchTemplate)
			)
		);
	};

	const getComputersSlice = (computers: IComputer[]): IComputer[] => {
		return computers.slice(
			page * rowsPerPage,
			page * rowsPerPage + rowsPerPage
		);
	};

	const filteredComputers = filterComputers();

	let computersTableContent: JSX.Element = (
		<Stack>
			<Skeleton
				height={56.5}
				animation="wave"
				className={classes.computersTablePlaceholder}
			></Skeleton>
			<Skeleton
				height={56.5 * rowsPerPage}
				animation="wave"
				className={classes.computersTablePlaceholder}
			></Skeleton>
		</Stack>
	);

	if (!isLoading) {
		computersTableContent = (
			<>
				<TableContainer>
					<Table aria-label="Computers table">
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>Наименование</TableCell>
								<TableCell>Назначение</TableCell>
								<TableCell>Операционная система</TableCell>
								<TableCell align="center">
									Последний бэкап
								</TableCell>
								<TableCell align="center">
									Последние изменения
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{getComputersSlice(filteredComputers).map(
								(computer) => (
									<ComputersTableRow
										key={computer._id}
										computer={computer}
									/>
								)
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					component="div"
					rowsPerPageOptions={COMPUTERS_PER_PAGE_OPTIONS}
					count={filteredComputers.length}
					rowsPerPage={rowsPerPage}
					page={page}
					labelRowsPerPage="Показывать по:"
					onPageChange={changePageHandler}
					onRowsPerPageChange={rowsPerPageChangeHandler}
				/>
			</>
		);
	}

	return (
		<Box className={classes.computersTable}>
			<SearchField
				value={search}
				label="Искать по имени / назначению"
				className={classes.computersTableSearch}
				onChange={searchChangeHandler}
			/>
			{computersTableContent}
		</Box>
	);
};

export default ComputersTable;
