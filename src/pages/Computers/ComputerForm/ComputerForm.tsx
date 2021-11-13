import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { Box, Typography, Button } from "@mui/material";

import ComputerInfoSection from "../Computer/ComputerInfoSection/ComputerInfoSection";
import { ReactComponent as CommonInfoIcon } from "../../../assets/icons/common-info.svg";
import { ReactComponent as CPUIcon } from "../../../assets/icons/cpu.svg";
import { ReactComponent as RAMIcon } from "../../../assets/icons/ram.svg";
import { ReactComponent as HDDIcon } from "../../../assets/icons/hdd.svg";
import { ReactComponent as BackupIcon } from "../../../assets/icons/backup.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";
import ComputerFormCommon from "./ComputerFormSections/ComputerFormCommon";
import ComputerFormCpu from "./ComputerFormSections/ComputerFormCpu";
import ComputerFormRam from "./ComputerFormSections/ComputerFormRam";
import ComputerFormHdd from "./ComputerFormSections/ComputerFormHdd";

import { useStyles } from "./ComputerForm.styles";

import { computerFormValidation } from "./ComputerForm.validation";

import { ADD_COMPUTER_FORM_VALUES } from "./ComputerForm.constants";

const ComputerForm: FC = () => {
	const classes = useStyles();

	return (
		<Box>
			<Typography
				variant="h5"
				component="h3"
				className={classes.computerFormHeading}
			>
				Добавление нового сервера / АРМ
			</Typography>

			<Formik
				initialValues={ADD_COMPUTER_FORM_VALUES}
				validationSchema={computerFormValidation}
				onSubmit={(values) => {
					const sanitazed = Object.entries(values).reduce(
						(acc, [key, value]) => {
							if (value !== "") {
								return { ...acc, [key]: value };
							}

							return acc;
						},
						{}
					);

					console.log(sanitazed);
				}}
			>
				{({ values, touched, errors, handleChange }) => (
					<Form noValidate>
						<ComputerInfoSection
							title="Общая информация"
							icon={CommonInfoIcon}
						>
							<ComputerFormCommon
								values={values}
								touched={touched}
								errors={errors}
								handleChange={handleChange}
							/>
						</ComputerInfoSection>

						<ComputerInfoSection
							title="Центральный процессор"
							icon={CPUIcon}
						>
							<ComputerFormCpu
								values={values}
								handleChange={handleChange}
							/>
						</ComputerInfoSection>

						<ComputerInfoSection
							title="Оперативная память"
							icon={RAMIcon}
						>
							<ComputerFormRam
								values={values}
								handleChange={handleChange}
							/>
						</ComputerInfoSection>

						<ComputerInfoSection
							title="Жёсткие диски"
							icon={HDDIcon}
						>
							<ComputerFormHdd
								values={values}
								handleChange={handleChange}
							/>
						</ComputerInfoSection>

						<Button type="submit">Save</Button>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default ComputerForm;
