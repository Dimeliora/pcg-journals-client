import { FC, ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

import { ISearchFieldProps } from "./SearchField.interface";

const SearchField: FC<ISearchFieldProps> = ({
	value,
	label,
	className = "",
	onChange,
}) => {
	const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.value);
	};

	return (
		<TextField
			type="search"
			size="small"
			variant="outlined"
			label={label}
			value={value}
			onChange={searchChangeHandler}
			className={className}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<Search />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchField;
