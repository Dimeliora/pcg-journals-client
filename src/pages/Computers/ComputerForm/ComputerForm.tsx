import { FC } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { Box, Typography, Button } from "@mui/material";
import { KeyboardReturn, Save, RotateLeft } from "@mui/icons-material";

import ComputerInfoHead from "../Computer/ComputerInfoHead/ComputerInfoHead";
import ComputerFormCommon from "./ComputerFormSections/ComputerFormCommon";
import ComputerFormCpu from "./ComputerFormSections/ComputerFormCpu";
import ComputerFormRam from "./ComputerFormSections/ComputerFormRam";
import ComputerFormHdd from "./ComputerFormSections/ComputerFormHdd";
import ComputerFormBackup from "./ComputerFormSections/ComputerFormBackup";
import ComputerFormComments from "./ComputerFormSections/ComputerFormComments";
import { ReactComponent as CommonInfoIcon } from "../../../assets/icons/common-info.svg";
import { ReactComponent as CPUIcon } from "../../../assets/icons/cpu.svg";
import { ReactComponent as RAMIcon } from "../../../assets/icons/ram.svg";
import { ReactComponent as HDDIcon } from "../../../assets/icons/hdd.svg";
import { ReactComponent as BackupIcon } from "../../../assets/icons/backup.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";

import {
	useAppSelector,
	useAppDispatch,
} from "../../../store/hooks/store.hooks";
import { useStyles } from "./ComputerForm.styles";

import { computerFormValidation } from "./ComputerForm.validation";
import {
	createComputerRequest,
	updateComputerRequest,
} from "../../../store/reducers/computers.reducer";

import { ADD_COMPUTER_FORM_VALUES } from "./ComputerForm.constants";

import {
	AddComputerData,
	IComputer,
} from "../../../interfaces/computer.interfaces";
import { IdRouteParam } from "../../../interfaces/id.param.type";

const ComputerForm: FC = () => {
	const classes = useStyles();

	const history = useHistory();

	const { id } = useParams<IdRouteParam>();

	const dispatch = useAppDispatch();

	const { computers } = useAppSelector(({ computers }) => computers);

	const backHandler = (): void => {
		history.goBack();
	};

	const currComputer = computers.find((computer) => computer._id === id);

	let addComputerFormValues = ADD_COMPUTER_FORM_VALUES;
	if (currComputer) {
		addComputerFormValues = Object.keys(addComputerFormValues).reduce(
			(acc, key) => ({ ...acc, [key]: currComputer[key as keyof IComputer] }),
			{} as AddComputerData
		);
	}

	let headingText = "???????????????????? ???????????? ?????????????? / ??????";
	if (id && currComputer) {
		headingText = `???????????????????????????? ${currComputer.pcName}`;
	}

	if (id && !currComputer) {
		return <Redirect to="/computers" />;
	}

	return (
		<>
			<Typography
				variant="h5"
				component="h3"
				className={classes.computerFormHeading}
			>
				{headingText}
			</Typography>

			<Formik
				initialValues={addComputerFormValues}
				validationSchema={computerFormValidation}
				onSubmit={(values) => {
					const filledFieldsValues = Object.entries(values).reduce(
						(acc, [key, value]) => {
							if (typeof value === "string" && value.trim().length === 0) {
								return acc;
							}

							return { ...acc, [key]: value };
						},
						{} as AddComputerData
					);

					if (id && currComputer) {
						dispatch(updateComputerRequest(id, filledFieldsValues));
					} else {
						dispatch(createComputerRequest(filledFieldsValues));
					}

					history.goBack();
				}}
			>
				{({ values, touched, errors, handleChange }) => (
					<Form noValidate>
						<Box className={classes.computerFormControls}>
							<Button
								type="button"
								size="small"
								variant="contained"
								className={classes.computerFormControlsBack}
								startIcon={<KeyboardReturn />}
								onClick={backHandler}
							>
								??????????
							</Button>

							<Button
								type="submit"
								size="small"
								variant="contained"
								color="success"
								className={classes.computerFormControlsSave}
								startIcon={<Save />}
							>
								??????????????????
							</Button>

							<Button
								type="reset"
								size="small"
								variant="contained"
								startIcon={<RotateLeft />}
							>
								????????????????
							</Button>
						</Box>

						<ComputerInfoHead title="?????????? ????????????????????" icon={CommonInfoIcon} />
						<ComputerFormCommon
							values={values}
							touched={touched}
							errors={errors}
							handleChange={handleChange}
						/>

						<ComputerInfoHead title="?????????????????????? ??????????????????" icon={CPUIcon} />
						<ComputerFormCpu values={values} handleChange={handleChange} />

						<ComputerInfoHead title="?????????????????????? ????????????" icon={RAMIcon} />
						<ComputerFormRam values={values} handleChange={handleChange} />

						<ComputerInfoHead title="?????????????? ??????????" icon={HDDIcon} />
						<ComputerFormHdd values={values} handleChange={handleChange} />

						<ComputerInfoHead title="?????????????????? ??????????" icon={BackupIcon} />
						<ComputerFormBackup values={values} handleChange={handleChange} />

						<ComputerInfoHead title="??????????????????????" icon={CommentIcon} />
						<ComputerFormComments values={values} handleChange={handleChange} />
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ComputerForm;
