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
import { DeleteForever } from "@mui/icons-material";

import { useStyles } from "./ComputerFormSections.styles";

import { ADD_COMPUTER_FORM_DISK } from "../ComputerForm.constants";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";
import {
	IDisks,
	HddFormFactors,
} from "../../../../interfaces/computer.interface";

const ComputerFormHdd: FC<IComputerFormSectionsProps> = ({
	values,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.computerFormSection}>
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
					type="number"
					label="Суммарный объём, Гб"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
				/>
			</Box>

			<Box className={classes.computerFormDynamic}>
				<FieldArray name="disks">
					{(arrayHelpers) => (
						<>
							<Button
								variant="contained"
								size="small"
								onClick={() =>
									arrayHelpers.push(ADD_COMPUTER_FORM_DISK)
								}
							>
								Добавить диск
							</Button>
							{values.disks.map((disk: IDisks, idx) => (
								<Box
									key={idx}
									className={classes.computerFormDynamicItem}
								>
									<Typography
										variant="h6"
										component="h4"
										className={
											classes.computerFormDynamicHeading
										}
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
										type="number"
										label="Объём, Гб"
										size="small"
										variant="outlined"
										onChange={handleChange}
										inputProps={{ min: 0, step: 1 }}
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
											<MenuItem
												value={HddFormFactors.MOBILE}
											>
												2.5"
											</MenuItem>
											<MenuItem
												value={HddFormFactors.DESKTOP}
											>
												3.5"
											</MenuItem>
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
										className={
											classes.computerFormDynamicDelete
										}
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
		</>
	);
};

export default ComputerFormHdd;
