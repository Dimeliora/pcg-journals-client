import { FC, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Button,
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
import { Add } from "@mui/icons-material";

import ComputersTableRow from "./ComputersTableRow/ComputersTableRow";
import SearchField from "../../../components/SearchField/SearchField";

import { useStyles } from "./ComputersTable.styles";
import { useAppSelector } from "../../../store/hooks/store.hooks";

import { COMPUTERS_PER_PAGE_OPTIONS } from "../Computers.constants";

import { IComputer } from "../../../interfaces/computer.interfaces";
import { IComputersTableProps } from "./ComputersTable.interfaces";

const ComputersTable: FC<IComputersTableProps> = (props) => {
	const {
		page,
		rowsPerPage,
		search,
		onPageChange,
		onRowsPerPageChange,
		onSearchChange,
	} = props;

	const classes = useStyles();

	const { isLoading, computers } = useAppSelector(
		({ computers }) => computers
	);

	const changePageHandler = (e: unknown, newPage: number): void => {
		onPageChange(newPage);
	};

	const rowsPerPageChangeHandler = (
		e: ChangeEvent<HTMLInputElement>
	): void => {
		onRowsPerPageChange(Number(e.target.value));
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
			/>
			<Skeleton
				height={56.5 * rowsPerPage}
				animation="wave"
				className={classes.computersTablePlaceholder}
			/>
		</Stack>
	);

	if (!isLoading) {
		computersTableContent = (
			<>
				<TableContainer>
					<Table sx={{ minWidth: 1050 }} aria-label="Computers table">
						<TableHead>
							<TableRow>
								<TableCell sx={{ width: "5%" }}></TableCell>
								<TableCell sx={{ width: "10%" }}>
									????????????????????????
								</TableCell>
								<TableCell sx={{ width: "25%" }}>
									????????????????????
								</TableCell>
								<TableCell sx={{ width: "25%" }}>
									???????????????????????? ??????????????
								</TableCell>
								<TableCell align="center" sx={{ width: "15%" }}>
									?????????????????? ??????????
								</TableCell>
								<TableCell align="center" sx={{ width: "20%" }}>
									?????????????????? ??????????????????
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
					labelRowsPerPage="???????????????????? ????:"
					onPageChange={changePageHandler}
					onRowsPerPageChange={rowsPerPageChangeHandler}
				/>
			</>
		);
	}

	return (
		<Box className={classes.computersTable}>
			<Box className={classes.computersTablePanel}>
				<SearchField
					value={search}
					label="???????????? ???? ???????????????????????? / ????????????????????"
					className={classes.computersTableSearch}
					onChange={onSearchChange}
				/>
				<Button
					variant="contained"
					size="small"
					startIcon={<Add />}
					component={Link}
					to="/computers/edit"
				>
					????????????????
				</Button>
			</Box>
			{computersTableContent}
		</Box>
	);
};

export default ComputersTable;
