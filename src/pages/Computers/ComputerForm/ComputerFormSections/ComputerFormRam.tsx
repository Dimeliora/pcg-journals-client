import { FC } from "react";
import { Box, TextField } from "@mui/material";

import { useStyles } from "./ComputerFormSections.styles";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";

const ComputerFormRam: FC<IComputerFormSectionsProps> = ({
	values,
	touched,
	errors,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<TextField
				name="ramType"
				value={values.ramType}
				label="Тип памяти"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="ramTotalModules"
				value={values.ramTotalModules}
				label="Макс. число модулей"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>
		</Box>
	);
};

export default ComputerFormRam;
