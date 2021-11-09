import { ChangeEvent } from "react";

export interface IComputersTableProps {
	page: number;
	rowsPerPage: number;
	search: string;
	onPageChange: (e: unknown, newPage: number) => void;
	onRowsPerPageChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSearchChange: (value: string) => void;
}
