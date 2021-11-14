import { FC } from "react";
import { FieldArray } from "formik";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { Add, DeleteForever } from "@mui/icons-material";

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
		<Box className={classes.computerFormSection}>
			<Box className={classes.computerFormSectionStatic}>
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

			<Box className={classes.computerFormSectionDynamic}>
				<FieldArray name="ramModules">
					{(arrayHelpers) => (
						<>
							<Button
								variant="contained"
								size="small"
								startIcon={<Add />}
								onClick={() => arrayHelpers.push(ADD_COMPUTER_FORM_RAM_MODULE)}
							>
								Добавить модуль
							</Button>
							{values.ramModules.map((module: IRamModules, idx) => (
								<Box
									key={idx}
									className={classes.computerFormSectionDynamicItem}
								>
									<Typography
										variant="h6"
										component="h4"
										className={classes.computerFormSectionDynamicHeading}
									>
										Модуль #{idx + 1}
									</Typography>

									<TextField
										name={`ramModules.${idx}.ramModuleSize`}
										value={module.ramModuleSize}
										label="Объём, Гб"
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

export default ComputerFormRam;
