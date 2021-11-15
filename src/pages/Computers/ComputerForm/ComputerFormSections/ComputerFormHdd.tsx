import { FC } from "react";
import { FieldArray } from "formik";
import {
	Box,
	Typography,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	IconButton,
} from "@mui/material";
import { Add, DeleteForever } from "@mui/icons-material";

import { useStyles } from "./ComputerFormSections.styles";

import { ADD_COMPUTER_FORM_DISK } from "../ComputerForm.constants";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";
import { HddFormFactors } from "../../../../interfaces/computer.interface";

const ComputerFormHdd: FC<IComputerFormSectionsProps> = ({
	values,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<Box className={classes.computerFormSectionStatic}>
				<TextField
					name="raidMode"
					value={values.raidMode}
					label="Режим RAID"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>

				<TextField
					name="totalDiskSpace"
					value={values.totalDiskSpace}
					label="Суммарный объём, Гб"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
				/>
			</Box>

			<Box className={classes.computerFormSectionDynamic}>
				<FieldArray name="disks">
					{(arrayHelpers) => (
						<>
							<Button
								variant="contained"
								size="small"
								startIcon={<Add />}
								onClick={() => arrayHelpers.push(ADD_COMPUTER_FORM_DISK)}
							>
								Добавить диск
							</Button>
							{values.disks.map((disk, idx) => (
								<Box
									key={idx}
									className={classes.computerFormSectionDynamicItem}
								>
									<Typography
										variant="h6"
										component="h4"
										className={classes.computerFormSectionDynamicHeading}
									>
										Диск #{idx + 1}
									</Typography>

									<TextField
										name={`disks.${idx}.hddModel`}
										value={disk.hddModel}
										label="Модель"
										size="small"
										variant="outlined"
										onChange={handleChange}
									/>

									<TextField
										name={`disks.${idx}.hddSize`}
										value={disk.hddSize}
										label="Объём, Гб"
										size="small"
										variant="outlined"
										onChange={handleChange}
									/>

									<FormControl
										variant="outlined"
										size="small"
										className={classes.computerFormInput}
									>
										<InputLabel id="computer-form-hdd-form-factor">
											Форм-фактор
										</InputLabel>
										<Select
											name={`disks.${idx}.hddFormFactor`}
											label="Форм-фактор"
											value={disk.hddFormFactor}
											onChange={handleChange}
											labelId="computer-form-hdd-form-factor"
										>
											<MenuItem value=""></MenuItem>
											<MenuItem value={HddFormFactors.MOBILE}>2.5"</MenuItem>
											<MenuItem value={HddFormFactors.DESKTOP}>3.5"</MenuItem>
										</Select>
									</FormControl>

									<TextField
										name={`disks.${idx}.hddSmart`}
										value={disk.hddSmart}
										label="Статус S.M.A.R.T."
										size="small"
										variant="outlined"
										onChange={handleChange}
									/>

									<IconButton
										color="error"
										aria-label="Удалить"
										title="Удалить"
										className={classes.computerFormSectionDynamicDelete}
										onClick={() => arrayHelpers.remove(idx)}
									>
										<DeleteForever />
									</IconButton>
								</Box>
							))}
						</>
					)}
				</FieldArray>
			</Box>
		</Box>
	);
};

export default ComputerFormHdd;
