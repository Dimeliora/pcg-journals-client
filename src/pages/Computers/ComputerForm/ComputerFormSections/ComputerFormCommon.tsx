import { FC } from "react";
import {
	Box,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText,
} from "@mui/material";

import { useStyles } from "./ComputerFormSections.styles";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";
import { ComputerTypes } from "../../../../interfaces/computer.interface";

const ComputerFormCommon: FC<IComputerFormSectionsProps> = ({
	values,
	touched,
	errors,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<Box className={classes.computerFormSectionStatic}>
				<FormControl
					variant="outlined"
					size="small"
					className={classes.computerFormInput}
				>
					<InputLabel id="computer-form-pc-type">Тип</InputLabel>
					<Select
						name="pcType"
						label="Тип"
						value={values.pcType}
						onChange={handleChange}
						labelId="computer-form-pc-type"
						error={touched?.pcType && Boolean(errors?.pcType)}
					>
						<MenuItem value=""></MenuItem>
						<MenuItem value={ComputerTypes.PC}>АРМ</MenuItem>
						<MenuItem value={ComputerTypes.SERVER}>Сервер</MenuItem>
					</Select>
					<FormHelperText error={touched?.pcType && Boolean(errors?.pcType)}>
						{touched?.pcType && errors?.pcType}
					</FormHelperText>
				</FormControl>

				<TextField
					name="pcName"
					value={values.pcName}
					label="Наименование"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					error={touched?.pcName && Boolean(errors?.pcName)}
					helperText={touched?.pcName && errors?.pcName}
				/>

				<TextField
					name="pcPurpose"
					value={values.pcPurpose}
					label="Назначение"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					error={touched?.pcPurpose && Boolean(errors?.pcPurpose)}
					helperText={touched?.pcPurpose && errors?.pcPurpose}
				/>

				<TextField
					name="formFactor"
					value={values.formFactor}
					label="Форм-фактор"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="motherboard"
					value={values.motherboard}
					label="Материнская плата"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="numOfSockets"
					value={values.numOfSockets}
					label="Число сокетов"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="typeOfSocket"
					value={values.typeOfSocket}
					label="Тип сокета"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="maxRamSize"
					value={values.maxRamSize}
					label="Макс. объем RAM, Гб"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="sataType"
					value={values.sataType}
					label="Версия SATA"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="numOfSataPorts"
					value={values.numOfSataPorts}
					label="Число портов SATA"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="raid"
					value={values.raid}
					label="Тип RAID"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="numOfPsu"
					value={values.numOfPsu}
					label="Число БП"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="psuPower"
					value={values.psuPower}
					label="Мощность БП, Вт"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="os"
					value={values.os}
					label="ОС"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>
			</Box>
		</Box>
	);
};

export default ComputerFormCommon;
