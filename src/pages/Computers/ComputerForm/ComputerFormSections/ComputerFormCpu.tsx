import { FC } from "react";
import { Box, TextField } from "@mui/material";

import { useStyles } from "./ComputerFormSections.styles";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";

const ComputerFormCpu: FC<IComputerFormSectionsProps> = ({
	values,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<Box className={classes.computerFormSectionStatic}>
				<TextField
					name="numOfCpu"
					value={values.numOfCpu}
					type="number"
					label="Число ЦП"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
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
					type="number"
					label="Число ядер ЦП"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
				/>

				<TextField
					name="cpuFrequency"
					value={values.cpuFrequency}
					type="number"
					label="Частота ЦП, ГГц"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 0.01 }}
				/>

				<TextField
					name="cpuL1Cache"
					value={values.cpuL1Cache}
					type="number"
					label="Кэш L1, Кб"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
				/>

				<TextField
					name="cpuL2Cache"
					value={values.cpuL2Cache}
					type="number"
					label="Кэш L2, Кб"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
				/>

				<TextField
					name="cpuL3Cache"
					value={values.cpuL3Cache}
					type="number"
					label="Кэш L3, Кб"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
				/>
			</Box>
		</Box>
	);
};

export default ComputerFormCpu;
