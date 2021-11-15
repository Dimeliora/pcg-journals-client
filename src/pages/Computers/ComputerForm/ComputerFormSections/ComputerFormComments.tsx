import { FC } from "react";
import { Box, TextField } from "@mui/material";

import { useStyles } from "./ComputerFormSections.styles";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";

const ComputerFormComments: FC<IComputerFormSectionsProps> = ({
	values,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<TextField
				name="pcComments"
				value={values.pcComments}
				label="Комментарии"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
				minRows={3}
				multiline
			/>
		</Box>
	);
};

export default ComputerFormComments;
