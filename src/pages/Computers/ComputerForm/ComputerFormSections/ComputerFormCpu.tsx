import { FC } from "react";
import { Box, TextField } from "@mui/material";

import { useStyles } from "./ComputerFormSections.styles";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";

const ComputerFormCpu: FC<IComputerFormSectionsProps> = ({
	values,
	touched,
	errors,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<TextField
				name="numOfCpu"
				value={values.numOfCpu}
				label="Число ЦП"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="cpuModel"
				value={values.cpuModel}
				label="Модель ЦП"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="numOfCores"
				value={values.numOfCores}
				label="Число ядер ЦП"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="cpuFrequency"
				value={values.cpuFrequency}
				label="Частота ЦП, ГГц"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="cpuL1Cache"
				value={values.cpuL1Cache}
				label="Кэш L1, Кб"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="cpuL2Cache"
				value={values.cpuL2Cache}
				label="Кэш L2, Кб"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>

			<TextField
				name="cpuL3Cache"
				value={values.cpuL3Cache}
				label="Кэш L3, Кб"
				size="small"
				variant="outlined"
				onChange={handleChange}
				className={classes.computerFormInput}
			/>
		</Box>
	);
};

export default ComputerFormCpu;
