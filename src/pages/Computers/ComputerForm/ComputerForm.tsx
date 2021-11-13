import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
	Box,
	Typography,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText,
	Button,
} from "@mui/material";

import ComputerInfoSection from "../Computer/ComputerInfoSection/ComputerInfoSection";
import { ReactComponent as CommonInfoIcon } from "../../../assets/icons/common-info.svg";
import { ReactComponent as CPUIcon } from "../../../assets/icons/cpu.svg";
import { ReactComponent as RAMIcon } from "../../../assets/icons/ram.svg";
import { ReactComponent as HDDIcon } from "../../../assets/icons/hdd.svg";
import { ReactComponent as BackupIcon } from "../../../assets/icons/backup.svg";
import { ReactComponent as ToolsIcon } from "../../../assets/icons/tools.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";

import { useStyles } from "./ComputerForm.styles";

const ADD_COMPUTER_FORM_VALUES = {
	pcType: "",
	pcName: "",
};

const ComputerForm: FC = () => {
	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h5" component="h3">
				Добавление нового сервера / АРМ
			</Typography>

			<Formik initialValues={ADD_COMPUTER_FORM_VALUES} onSubmit={() => {}}>
				{({ values, touched, errors }) => (
					<Form noValidate>
						<ComputerInfoSection title="Общая информация" icon={CommonInfoIcon}>
							<Grid container spacing={2}>
								<Grid item xs={3}>
									<FormControl
										variant="outlined"
										size="small"
										className={classes.computerFormInput}
									>
										<InputLabel id="computer-form-pc-type">Тип</InputLabel>
										<Select
											name="pcName"
											value={values.pcType}
											onChange={() => {}}
											labelId="computer-form-pc-type"
										>
											<MenuItem value=""></MenuItem>
											<MenuItem value="PC">АРМ</MenuItem>
											<MenuItem value="SERVER">Сервер</MenuItem>
										</Select>
									</FormControl>
									<TextField
										name="pcName"
										value={values.pcName}
										label="Наименование"
										size="small"
										variant="outlined"
										className={classes.computerFormInput}
										error={touched.pcName && Boolean(errors.pcName)}
										helperText={touched.pcName && errors.pcName}
									/>
									<TextField
										name="pcName"
										value={values.pcName}
										label="Наименование"
										size="small"
										variant="outlined"
										className={classes.computerFormInput}
										error={touched.pcName && Boolean(errors.pcName)}
										helperText={touched.pcName && errors.pcName}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										name="pcName"
										value={values.pcName}
										label="Наименование"
										size="small"
										variant="outlined"
										className={classes.computerFormInput}
										error={touched.pcName && Boolean(errors.pcName)}
										helperText={touched.pcName && errors.pcName}
									/>
									<TextField
										name="pcName"
										value={values.pcName}
										label="Наименование"
										size="small"
										variant="outlined"
										className={classes.computerFormInput}
										error={touched.pcName && Boolean(errors.pcName)}
										helperText={touched.pcName && errors.pcName}
									/>
								</Grid>
							</Grid>
						</ComputerInfoSection>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default ComputerForm;
