import { FC } from "react";
import { FieldArray } from "formik";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

import { useStyles } from "./ComputerFormSections.styles";

import { ADD_COMPUTER_FORM_RAM_MODULE } from "../ComputerForm.constants";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";
import { IRamModules } from "../../../../interfaces/computer.interface";

const ComputerFormRam: FC<IComputerFormSectionsProps> = ({
	values,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<>
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
					type="number"
					label="Макс. число модулей"
					size="small"
					variant="outlined"
					onChange={handleChange}
					className={classes.computerFormInput}
					inputProps={{ min: 0, step: 1 }}
				/>
			</Box>

			<Box className={classes.computerFormDynamic}>
				<FieldArray name="ramModules">
					{(arrayHelpers) => (
						<>
							<Button
								variant="contained"
								size="small"
								onClick={() =>
									arrayHelpers.push(
										ADD_COMPUTER_FORM_RAM_MODULE
									)
								}
							>
								Добавить модуль
							</Button>
							{values.ramModules.map(
								(module: IRamModules, idx) => (
									<Box
										key={idx}
										className={
											classes.computerFormDynamicItem
										}
									>
										<Typography
											variant="h6"
											component="h4"
											className={
												classes.computerFormDynamicHeading
											}
										>
											Модуль #{idx + 1}
										</Typography>

										<TextField
											name={`ramModules.${idx}.ramModuleSize`}
											value={module.ramModuleSize}
											type="number"
											label="Объём, Гб"
											size="small"
											variant="outlined"
											onChange={handleChange}
											inputProps={{ min: 0, step: 0.1 }}
										/>

										<IconButton
											color="error"
											aria-label="Удалить"
											title="Удалить"
											className={
												classes.computerFormDynamicDelete
											}
											onClick={() =>
												arrayHelpers.remove(idx)
											}
										>
											<DeleteForever />
										</IconButton>
									</Box>
								)
							)}
						</>
					)}
				</FieldArray>
			</Box>
		</>
	);
};

export default ComputerFormRam;
