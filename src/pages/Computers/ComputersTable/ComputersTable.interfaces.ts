export interface IComputersTableProps {
	page: number;
	rowsPerPage: number;
	search: string;
	onPageChange: (value: number) => void;
	onRowsPerPageChange: (value: number) => void;
	onSearchChange: (value: string) => void;
}
