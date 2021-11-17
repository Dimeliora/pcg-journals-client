import { FC } from "react";
import { FieldArray } from "formik";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { Add, DeleteForever } from "@mui/icons-material";

import { useStyles } from "./ComputerFormSections.styles";

import { ADD_COMPUTER_FORM_BACKUP } from "../ComputerForm.constants";

import { IComputerFormSectionsProps } from "./ComputerFormSections.interfaces";

const ComputerFormRam: FC<IComputerFormSectionsProps> = ({
	values,
	handleChange,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.computerFormSection}>
			<Box className={classes.computerFormSectionDynamic}>
				<FieldArray name="pcBackups">
					{(arrayHelpers) => (
						<>
							<Button
								variant="contained"
								size="small"
								startIcon={<Add />}
								onClick={() => arrayHelpers.push(ADD_COMPUTER_FORM_BACKUP)}
							>
								Добавить копию
							</Button>
							{values.pcBackups.map((backup, idx) => (
								<Box
									key={idx}
									className={classes.computerFormSectionDynamicItem}
								>
									<Typography
										variant="h6"
										component="h4"
										className={classes.computerFormSectionDynamicHeading}
									>
										Копия #{idx + 1}
									</Typography>

									<TextField
										name={`pcBackups.${idx}.backupDate`}
										value={backup.backupDate}
										label="Дата"
										placeholder="гггг.мм.дд"
										size="small"
										variant="outlined"
										onChange={handleChange}
									/>

									<TextField
										name={`pcBackups.${idx}.backupSize`}
										value={backup.backupSize}
										label="Размер, Гб"
										size="small"
										variant="outlined"
										onChange={handleChange}
									/>

									<TextField
										name={`pcBackups.${idx}.backupStorage`}
										value={backup.backupStorage}
										label="Расположение"
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
